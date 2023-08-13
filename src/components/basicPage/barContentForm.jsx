import BarPlayer from './barPlayer'
import * as S from '../styles/basicPage/basicPageStyles'

const BarContentForm = ({currentTrack}) => {
  return currentTrack ? (
    <S.Bar>
      <BarPlayer currentTrack={currentTrack} />
    </S.Bar>
  ): null
}

export default BarContentForm
