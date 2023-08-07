import BarPlayer from './barPlayer'
import VolumeBlock from '../volumeBlock/volumeBlock'
import * as S from '../styles/basicPage/basicPageStyles'
import ProgressBar from './ProgressBar'


const BarContentForm = ({currentTrack}) => {


  return currentTrack ? (
    <S.Bar>
  <S.BarContent >
  <ProgressBar/>
    <S.BarPlayerBlock >
      <BarPlayer currentTrack={currentTrack} />
    </S.BarPlayerBlock>
  </S.BarContent>
    </S.Bar>
  
  ) : null
}

export default BarContentForm
