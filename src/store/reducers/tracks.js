import { compareRandom } from "../../utils/randomShuffledTracks";
import { setPlaylist } from "../actions/creators/tracks";
import {
  GET_FAVORITE_TRACKS,
  GET_TRACKS_FROM_PLAYLIST,
  LOG_IN_USER,
  LOG_OUT_USER,
  LOOP_TRACK,
  NEXT_TRACK,
  PAUSE_TRACK,
  PLAY_TRACK,
  PREV_TRACK,
  SET_CURRENT_TRACK,
  SET_PLAYLIST,
  SHUFFLE_PLAYLIST,
  TOGGLE_LIKE,

} from "../actions/types/tracks";

// начальное состояние
const initialState = {
  // Получение треков в данный плейлист
  setPlaylist: [],
  isPlaying: false,
  track: null,
  playlist: [],
  shuffledTracks: [],
  favoriteTracks: [],
  isLoop: false,
  isShuffle: false,
  isLogin: false,
  searchText: '',
};

export default function trackReducer(state = initialState, action) {
  // ловим action
  switch (action.type) {
    case PLAY_TRACK: {
      return {
        ...state,
        isPlaying: true,
      };
    }
    case PAUSE_TRACK: {
      return {
        ...state,
        isPlaying: false,
      };
    }
      case TOGGLE_LIKE:
        const { trackId } = action.payload;
        const updatedTracks = state.playlist.map((track, id) => {
          if (track.id === trackId) {
            return {
              ...state,
              isFavorite: !track.isFavorite,
            };
          }
          return track;
        });
        return {
          ...state,
          playlist: updatedTracks,
        };
    // действие со стором, получаем общее состояние и состояние - все треки
    case SET_PLAYLIST:
      const userId = JSON.parse(localStorage.getItem('userData'))?.id ?? null
      const tracksWithLikes = action.payload.map((track) => ({
        ...track,
        isFavorite:track.stared_user.some((user) => user.id === userId),
      }));
      return {
        ...state,
        playlist: tracksWithLikes,
      };
      // Выбор плейлиста
     case GET_TRACKS_FROM_PLAYLIST: 
     const tracksFromCategories = state.setPlaylist.map(() => ({
      ...track,
      isFavorite: !track.isFavorite
     }))
      return {
        ...state,
        setPlaylist:tracksFromCategories
      };
            //  получаем отдельный трек
            case SET_CURRENT_TRACK:
              const { track, index } = action.payload;
              return {
                ...state,
                track,
                currentTrackIndex: index,
                isLoop: false,
                isShuffle: false,
              };
    case LOOP_TRACK:
      return {
        ...state,
        isLoop: !state.isLoop,
      };

    case SHUFFLE_PLAYLIST:
      if (!state.isShuffle) {
        const shuffledTracks = compareRandom([...state.playlist]);
        return {
          ...state,
          shuffledTracks,
          isShuffle: true,
        };
      } else {
        const trackIndex = state.playlist.indexOf(state.track);
        return {
          ...state,
          isShuffle: false,
          shuffledTracks: [],
          currentTrackIndex: trackIndex,
        };
      }
      case PREV_TRACK:
        const prevIndex = state.isShuffle
          ? state.shuffledTracks.indexOf(state.track) - 1
          : state.currentTrackIndex - 1;
        if (prevIndex >= 0 && prevIndex < state.playlist.length) {
          return {
            ...state,
            track: state.isShuffle
              ? state.shuffledTracks[prevIndex]
              : state.playlist[prevIndex],
            currentTrackIndex: prevIndex,
            isLoop: false,
          };
        }
    case NEXT_TRACK:
      const nextIndex = state.isShuffle
        ? state.shuffledTracks.indexOf(state.track) + 1
        : state.currentTrackIndex + 1;
      if (nextIndex >= 0 && nextIndex < state.playlist.length) {
        return {
          ...state,
          track: state.isShuffle
            ? state.shuffledTracks[nextIndex]
            : state.playlist[nextIndex],
          currentTrackIndex: nextIndex,
          isLoop: false,
        };
      }
      return state;
      case LOG_OUT_USER:
        return {
          ...state,
          track: null,
          isPlaying: false,
        }
        case LOG_IN_USER:
          return {
            ...state,
            track: null,
          }
      // обновление всех треков, добавление их в список лайкнутых

      case GET_FAVORITE_TRACKS:
        const favoriteTracks = action.payload.map((track) => ({
          ...track,
          isFavorite:true,
        }))
        return {
          ...state,
          favoriteTracks:favoriteTracks,
        }

    //  действие со стором - получение состояния конкретного трека

    default:
      return state;
  }
}
