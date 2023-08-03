import PlayerControls from '../player/playerControls'
import TrackPlay from './trackPlay'
import * as S from '../styles/basicPage/basicPageStyles'

const BarPlayer = ( currentTrack) => {
  return currentTrack ? (
    <S.BarPlayer>
      <PlayerControls />
      <TrackPlay  currentTrack={currentTrack}/>
    </S.BarPlayer>
  ):null
}

export default BarPlayer