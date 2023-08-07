import VolumeImg from './volumeImg'
import VolumeProgressBtn from './volumeProgress'

import * as S from '../styles/volumeBlock/volumeBlockStyles'

const VolumeBlock = ({ volume, onVolumeChange }) => {
  return (
    <S.VolumeBlock>
      <S.VolumeContent>
        <VolumeImg />
        <VolumeProgressBtn volume={volume} onVolumeChange={onVolumeChange} />
      </S.VolumeContent>
    </S.VolumeBlock>
  )
}
export default VolumeBlock