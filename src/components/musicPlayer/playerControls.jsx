import * as S from "../styles/player/playerStyles"
import { useState } from "react"
import { useEffect } from "react"
import { PlayerButtonNext, PlayerButtonPlay, PlayerButtonPrev, PlayerButtonRepeat, PlayerButtonShuffle } from "./playerButtons"
import { useDispatch, useSelector } from "react-redux"
// import {
//   playlistSelector,
//   shufflePlaylistSelector,
// } from '../../../store/selectors/tracks'


const PlayerControls = ({togglePlay, toggleLoop, isLoop, isPlaying, currentTrack}) => {
  
  const [isLoopActive, setIsLoopActive] = useState(false)
  const [isShuffleActive, setIsisShuffleActive] = useState(false)
  
  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoopActive(isLoop)

  }, [isLoop])

  return (
    <S.PlayerControls>
      <PlayerButtonPrev  icon="prev" alt="prev" onClick={() => alert('Функция пока не реализована')}/>
      <PlayerButtonPlay  icon={isPlaying ? 'pause' : 'play'} togglePlay={togglePlay}/>
      <PlayerButtonNext icon="next" alt="next" isShuffleActive={isShuffleActive} setIsisShuffleActive={setIsisShuffleActive} />
      <PlayerButtonRepeat icon={isLoopActive ? 'repeat_active' : 'repeat'} alt="repeat" isLoopActive={isLoopActive} toggleLoop={toggleLoop}/>
      <PlayerButtonShuffle  icon="shuffle" alt="shuffle"  onClick={() => alert('Функция пока не реализована')} />
    </S.PlayerControls>
  )
}

export default PlayerControls
