import BarPlayer from './barPlayer'
import * as S from '../styles/basicPage/basicPageStyles'

const BarContentForm = ({currentTrack}) => {
  return (
    <S.Bar>
      <BarPlayer currentTrack={currentTrack}/>
    </S.Bar>
  )
}

export default BarContentForm
