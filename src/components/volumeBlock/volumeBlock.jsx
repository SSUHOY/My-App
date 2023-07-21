import VolumeImg from './volumeImg'
import VolumeProgressBtn from './volumeProgress'

import * as S from '../styles/volumeBlock/volumeBlockStyles'

const VolumeBlock = () => {
  return (
    <S.VolumeBlock>
      <S.VolumeContent>
        <VolumeImg />
        <VolumeProgressBtn />
      </S.VolumeContent>
    </S.VolumeBlock>
  )
}
export default VolumeBlock