import {
    SET_PLAYLIST, 
    SET_CURRENT_TRACK,
    NEXT_TRACK,
    PREV_TRACK,
    PAUSE_TRACK,
    SHUFFLE_PLAYLIST,
    PLAY_TRACK,
    LOOP_TRACK,
    GET_TRACKS
 } from '../types/tracks';


 export const setTrack = (track, index) => ({
    type: SET_CURRENT_TRACK,
    payload: {index, track}
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

export const setIsShuffle = () => ({
    type: SHUFFLE_PLAYLIST
})
    
export const setIsLoop = () => ({
    type: LOOP_TRACK
})

export const nextTrack = (track, index) => ({
    type: NEXT_TRACK,
    payload: {index, track}
})
  
export const prevTrack = (index, track) => ({
    type: PREV_TRACK,
    payload: {index, track}
  })
    

    
    
