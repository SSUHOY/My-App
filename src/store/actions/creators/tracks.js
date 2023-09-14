import {
    SET_PLAYLIST, 
    SET_CURRENT_TRACK,
    NEXT_TRACK,
    PREV_TRACK,
    PAUSE_TRACK,
    SHUFFLE_PLAYLIST,
    PLAY_TRACK,
    LOOP_TRACK,
    GET_FAVORITE_TRACKS,
    TOGGLE_LIKE,
    UPLOAD_TOKEN
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

export const getFavoriteTracks = (playlist) => ({
    type: GET_FAVORITE_TRACKS,
    payload: playlist,
})
     
export const toggleLike = (id, playlistName) =>({
    type: TOGGLE_LIKE,
    payload: {id, playlistName}
})

export const uploadTokens = (accessToken, refreshToken) => ({
    type: UPLOAD_TOKEN,
    payload: {accessToken, refreshToken}
})