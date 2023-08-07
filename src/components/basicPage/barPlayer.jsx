import PlayerControls from '../player/playerControls'
import TrackPlay from './trackPlay'
import * as S from '../styles/basicPage/basicPageStyles'
import ProgressBarTime from './ProgressBarTime'
import ProgressBar from './ProgressBar'

const BarPlayer = ({currentTrack,setCurrentTrack}) => {
  return currentTrack ? (
    <S.BarPlayer>
        <audio controls src={currentTrack.track_file} type="audio/mpeg">
      <source src="/music/song.mp3" type="audio/mpeg" />
        </audio>
        {/* <PlayerControls /> */}
      <TrackPlay currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}/>
    </S.BarPlayer>
  ):null
}

export default BarPlayer