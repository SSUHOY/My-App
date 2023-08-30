import {
    SET_PLAYLIST, 
    SET_CURRENT_TRACK,
    NEXT_TRACK,
    PREV_TRACK,
    PAUSE_TRACK,
    SHUFFLE_PLAYLIST,
    PLAY_TRACK
 } from '../types/tracks';


 export const setTrack = (track) => ({
type: SET_CURRENT_TRACK,
payload: track
 })

 export const pauseTrack = () => ({
    type: PAUSE_TRACK
     })


 export const playTrack = () => ({
    type: PLAY_TRACK
    })
    
     
export const setPlaylist = (playlist) => ({
    type: SET_PLAYLIST,
   payload: playlist
})
    
