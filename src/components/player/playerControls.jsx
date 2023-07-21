import PlayerButton from "./playerButton"
import * as S from "../styles/player/playerStyles"

const PlayerControls = () => {
  return (
    <S.PlayerControls>
      <PlayerButton icon="prev" alt="prev" />
      <PlayerButton icon="play" alt="play" />
      <PlayerButton icon="next" alt="next" />
      <PlayerButton icon="repeat" alt="repeat" />
      <PlayerButton icon="shuffle" alt="shuffle" />
    </S.PlayerControls>
  )
}

export default PlayerControls
