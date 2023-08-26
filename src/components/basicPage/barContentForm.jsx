import BarPlayer from './barPlayer'
import * as S from '../styles/basicPage/basicPageStyles'

const BarContentForm = ({currentTrack, setIsPlaying, isPlaying }) => {
  return (
    <S.Bar>
      <BarPlayer currentTrack={currentTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
    </S.Bar>
  )
}

export default BarContentForm
