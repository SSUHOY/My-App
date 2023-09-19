import BarPlayer from './barPlayer'
import * as S from '../styles/basicPage/basicPageStyles'

const BarContentForm = ({ setIsPlaying, isPlaying, currentTrack, audioRef }) => {
  return (
    <S.Bar>
      <BarPlayer
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTrack={currentTrack}
        />
    </S.Bar>
  )
}

export default BarContentForm
