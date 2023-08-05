import PlayerControls from '../player/playerControls'
import TrackPlay from './trackPlay'
import * as S from '../styles/basicPage/basicPageStyles'

const BarPlayer = (currentTrack,setCurrentTrack ) => {
  return currentTrack ? (
    <S.BarPlayer>
        <audio controls src={currentTrack.track_file} type="audio/mpeg"></audio>
      <PlayerControls />
      <TrackPlay currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}/>
    </S.BarPlayer>
  ):null
}

export default BarPlayer