import BarPlayer from './barPlayer'
import VolumeBlock from '../volumeBlock/volumeBlock'
import * as S from '../styles/basicPage/basicPageStyles'


const BarContentForm = ({currentTrack}) => {


  return currentTrack ? (
    <S.Bar>
  <S.BarContent >
    <S.BarPlayerProgress></S.BarPlayerProgress>
    <S.BarPlayerBlock >
      <BarPlayer currentTrack={currentTrack} />
      <VolumeBlock />
    </S.BarPlayerBlock>
  </S.BarContent>
    </S.Bar>
  
  ) : null
}

export default BarContentForm
