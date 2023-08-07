import PlayerButton from "./playerButton"
import * as S from "../styles/player/playerStyles"

const PlayerControls = ({togglePlay}) => {
  return (
    <S.PlayerControls>
      <PlayerButton icon="prev" alt="prev"  />
      <PlayerButton icon="play" alt="play" onClick={togglePlay}/>
      <PlayerButton icon="next" alt="next" />
      <PlayerButton icon="repeat" alt="repeat" />
      <PlayerButton icon="shuffle" alt="shuffle"  />
    </S.PlayerControls>
  )
}

export default PlayerControls
