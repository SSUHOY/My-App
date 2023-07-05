import PlayerControls from '../player_components/playerControls'
import TrackPlay from './trackPlay'

const BarPlayer = () => {
  return (
    <div className="bar__player player">
      <PlayerControls />
      <TrackPlay />
    </div>
  )
}

export default BarPlayer