import { compareRandom } from "../../utils/randomShuffledTracks"
import {
    LOOP_TRACK,
    NEXT_TRACK,
    PAUSE_TRACK,
    PLAY_TRACK,
    PREV_TRACK,
    SET_CURRENT_TRACK,
    SET_PLAYLIST,
    SHUFFLE_PLAYLIST
} from "../actions/types/tracks"

// начальное состояние 
const initialState = {
    isPlaying: false,
    track: null,
    playlist: [],
    shuffledTracks:[],
    isLoop: false,
    isShuffle: false,
}

export default function trackReducer(state = initialState, action) {
    // ловим action
    switch (action.type) {
        case PLAY_TRACK: {
            return {
                ...state,
                isPlaying: true,
            }
        }
        case PAUSE_TRACK: {
            return {
              ...state,
              isPlaying: false,
            }
      }
          //  получаем отдельный трек
      case SET_CURRENT_TRACK: 
        const { track, index } = action.payload
        return {
            ...state,
            track,
            currentTrackIndex: index,
            isLoop: false,
            isShuffle: false,
        }
        // действие со стором, получаем общее состояние и состояние - все треки
      case SET_PLAYLIST: 
            return {
              ...state,
              playlist: action.payload,
            }
        case LOOP_TRACK:
            return {
              ...state,
              isLoop: !state.isLoop,
            }
            case SHUFFLE_PLAYLIST:
                if (!state.isShuffle) {
                  const shuffledTracks = compareRandom([...state.playlist])
                  return {
                    ...state,
                    shuffledTracks,
                    isShuffle: true,
                  }
                } else {
                  const trackIndex = state.playlist.indexOf(state.track)
                  return {
                    ...state,
                    isShuffle: false,
                    shuffledTracks: [],
                    currentTrackIndex: trackIndex,
                  }
               }
        case NEXT_TRACK:
           const nextIndex = state.isShuffle
        ? state.shuffledTracks.indexOf(state.track) + 1
        : state.currentTrackIndex + 1
        if (nextIndex >= 0 && nextIndex < state.playlist.length) {
        return {
          ...state,
          track: state.isShuffle
            ? state.shuffledTracks[nextIndex]
            : state.playlist[nextIndex],
          currentTrackIndex: nextIndex,
          isLoop: false,
        }
      }
        return state
      
        case PREV_TRACK:
          const prevIndex = state.isShuffle
            ? state.shuffledTracks.indexOf(state.track) - 1
            : state.currentTrackIndex - 1
          if (prevIndex >= 0 && prevIndex < state.playlist.length) {
            return {
              ...state,
              track: state.isShuffle
                ? state.shuffledTracks[prevIndex]
                : state.playlist[prevIndex],
              currentTrackIndex: prevIndex,
              isLoop: false,
            }
          }
          
            //  действие со стором - получение состояния конкретного трека
        
         default:
            return state
        }
      }


