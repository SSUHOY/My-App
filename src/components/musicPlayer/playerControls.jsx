import * as S from "../styles/player/playerStyles"
import { useState } from "react"
import { useEffect } from "react"
import { PlayerButtonNext, PlayerButtonPlay, PlayerButtonPrev, PlayerButtonRepeat, PlayerButtonShuffle } from "./playerButtons"
import { useDispatch, useSelector } from "react-redux"
import { selectAllTracks, selectCurrentTrack, selectIsLoop, selectIsShuffle, selectShuffledTracks } from "../../store/selectors/tracks"
import { nextTrack, playTrack, prevTrack, setIsLoop, setIsShuffle, setPlaylist, setTrack } from "../../store/actions/creators/tracks"

const PlayerControls = ({togglePlay, isPlaying}) => {

  const dispatch = useDispatch()

  const isLoop = useSelector(selectIsLoop)
  const isShuffle = useSelector(selectIsShuffle)
  const tracks = useSelector(selectAllTracks)
  const shuffledTracks = useSelector(selectShuffledTracks)

  const handleToggleLoop = () => {
    dispatch(setIsLoop())
  }
  const handleNextTrack = () => {
    const trackList = isShuffle ? shuffledTracks : tracks
    dispatch(nextTrack(trackList))
    dispatch(playTrack())
  }

  const handlePrevTrack = () => {
    const trackList = isShuffle ? shuffledTracks : tracks
    dispatch(prevTrack(trackList))
    dispatch(playTrack())
  }

  const handleToggleShuffle = () => {
    dispatch(setIsShuffle())
    dispatch(playTrack())
  }

  return (
    <S.PlayerControls>
      <PlayerButtonPrev icon="prev" alt="prev" togglePrevTrack={handlePrevTrack}/>
      <PlayerButtonPlay icon={isPlaying ? 'pause' : 'play'} togglePlay={togglePlay}/>
      <PlayerButtonNext icon="next" alt="next" toggleNextTrack={handleNextTrack} />
      <PlayerButtonRepeat icon={isLoop ? 'repeated' : 'repeat'} alt="repeat" toggleLoop={handleToggleLoop} />
      <PlayerButtonShuffle icon={isShuffle ? "shuffled" :"shuffle"} alt="shuffle"  toggleShuffle={handleToggleShuffle}/>
    </S.PlayerControls>
  )
}

export default PlayerControls
