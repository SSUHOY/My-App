// import { DAILY_TRACKS, DANCE_HITS, INDIE_CHARGE } from "../actions/types/tracks"
// import {PlaylistSelection} from "../../"


// const initialState = {
//     dailyplaylist: [
//   {  
//     id: 8,
//     name: "Chase",
//     author: "Alexander Nakarada"
//   }
//     ],
//     dancehitsplaylist: [],
//     indiechargeplaylist: [],
// }

// const playlistsReducer = (state=initialState, action) => {
//     switch(action.type) {
//         case DAILY_TRACKS:
//             return {
//                 ...state, 
//                 dailyTracks: dailyplaylist,
//             }

//         case DANCE_HITS: 
//         return {
//             ...state,
//             danceHitsTracks: dancehitsplaylist,
//         }
//         case INDIE_CHARGE:
//             return {
//                 ...state,
//                 indieChargeTracks:indiechargeplaylist,
//             }
//             default: 
//             return state
//     }
// }

// export default playlistsReducer