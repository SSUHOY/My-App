import {
    PAUSE_TRACK,
    PLAY_TRACK,
    SET_CURRENT_TRACK,
    SET_PLAYLIST
} from "../actions/types/tracks"

// начальное состояние 
const initialState = {
    isPlaying: false,
    track: null,
    playlist: {},
    shuffledPlaylists: {},
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
        // действие со стором, получаем общее состояние и состояние - все треки
        case SET_PLAYLIST: {
            return {...state, playlist: action.payload}
        }
            //  действие со стором - получение состояния конкретного трека
        case SET_CURRENT_TRACK: {
            return {
                ...state,
                track: action.payload,
            }
           }
         default:
            return state
        }
      }


