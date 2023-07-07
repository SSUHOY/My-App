import PlayerButton from "./playerButton"

const PlayerControls = () => {
  return (
    <div className="player__controls">
      <PlayerButton icon="prev" alt="prev" />
      <PlayerButton icon="play" alt="play" />
      <PlayerButton icon="next" alt="next" />
      <PlayerButton icon="repeat" alt="repeat" />
      <PlayerButton icon="shuffle" alt="shuffle" />
    </div>
  )
}

export default PlayerControls
