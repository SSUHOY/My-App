import BarPlayer from './barPlayer'
import * as S from '../styles/basicPage/basicPageStyles'

const BarContentForm = ({currentTrack, isFavorite, setIsFavorite}) => {
  return (
    <S.Bar>
      <BarPlayer currentTrack={currentTrack} isFavorite={isFavorite} setIsFavorite={setIsFavorite}/>
    </S.Bar>
  )
}

export default BarContentForm
