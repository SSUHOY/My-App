import BarPlayer from './barPlayer'
import VolumeBlock from '../volumeBlock/volumeBlock'
import * as S from '../styles/basicPage/basicPageStyles'


const BarContentForm = () => {
  return (
    <S.Bar>
  <S.BarContent >
    <S.BarPlayerProgress></S.BarPlayerProgress>
    <S.BarPlayerBlock >
      <BarPlayer />
      <VolumeBlock />
    </S.BarPlayerBlock>
  </S.BarContent>
    </S.Bar>
  
  )
}

export default BarContentForm
