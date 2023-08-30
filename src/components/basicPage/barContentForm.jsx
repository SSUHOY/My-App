import BarPlayer from './barPlayer'
import * as S from '../styles/basicPage/basicPageStyles'

const BarContentForm = ({currentTrack, setIsPlaying, isPlaying, setCurrentTrack }) => {
  return (
    <S.Bar>
      <BarPlayer currentTrack={currentTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setCurrentTrack={setCurrentTrack} />
    </S.Bar>
  )
}

export default BarContentForm
