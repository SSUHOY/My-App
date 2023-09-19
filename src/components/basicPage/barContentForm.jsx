import BarPlayer from './barPlayer'
import * as S from '../styles/basicPage/basicPageStyles'

const BarContentForm = ({ setIsPlaying, isPlaying }) => {
  return (
    <S.Bar>
      <BarPlayer
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        />
    </S.Bar>
  )
}

export default BarContentForm
