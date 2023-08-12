import PlayerButton from "./playerButton"
import * as S from "../styles/player/playerStyles"
import { useState } from "react"
import { useEffect } from "react"
import { PlayerButtonNext, PlayerButtonPlay, PlayerButtonPrev, PlayerButtonRepeat, PlayerButtonShuffle } from "./playerButtons"

const PlayerControls = ({togglePlay, toggleLoop, isLoop, isPlaying}) => {
  
  const [isLoopActive, setIsLoopActive] = useState(false)

  useEffect(() => {
    setIsLoopActive(isLoop)
    console.log(isLoopActive)
  }, [isLoop])

  const iconConfig = {
    play: {
      marginRight: '23px',
    },
    pause: {
      marginRight: '23px',
    },
    prev: {
      marginRight: '23px',
    },
    next: {
      marginRight: '28px',
    },
    repeat: {
      marginRight: '24px',
    },
  }

  return (
    <S.PlayerControls>
      <PlayerButtonPrev  iconConfig={iconConfig} icon="prev" alt="prev" onClick={() => alert('Функция пока не реализована')}/>
      <PlayerButtonPlay  iconConfig={iconConfig} icon={isPlaying ? 'pause' : 'play'} togglePlay={togglePlay}/>
      <PlayerButtonNext  iconConfig={iconConfig} icon="next" alt="next" />
      <PlayerButtonRepeat iconConfig={iconConfig} icon="repeat" alt="repeat" onClick={toggleLoop} isLoopActive={isLoopActive} />
      <PlayerButtonShuffle iconConfig={iconConfig} icon="shuffle" alt="shuffle"  onClick={() => alert('Функция пока не реализована')} />
    </S.PlayerControls>
  )
}

export default PlayerControls
