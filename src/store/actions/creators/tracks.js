import {
    SET_PLAYLIST, 
    SET_CURRENT_TRACK,
    NEXT_TRACK,
    PREV_TRACK,
    PAUSE_TRACK,
    SHUFFLE_PLAYLIST
 } from '../types';


 export const setTrack = (id) => ({
type: SET_CURRENT_TRACK,
payload: id
 })

 export const pauseTrack = (isPlaying) => ({
    type: PAUSE_TRACK,
    payload: isPlaying
     })

     
export const setPlaylist = (playlist) => ({
    type: PAUSE_TRACK,
   payload: playlist
    })