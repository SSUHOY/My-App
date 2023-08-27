export const playlistSelector = (store) => store.player.playlist
export const shufflePlaylistSelector = (store) => store.player.shufflePlaylist
export const isTrackPlaySelector = (store) => store.player.playing
export const selectIsPlaying = (state) => state.player.isPlaying
export const selectCurrentTrack = (state) => state.player.track