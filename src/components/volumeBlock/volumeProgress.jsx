import  * as S from "../styles/volumeBlock/volumeBlockStyles"

const VolumeProgressBtn = () => {
    return (
      <S.VolumeProgressLine>
        <S.VolumeProgressLineInput type="range" name="range" />
      </S.VolumeProgressLine>
    )
  }
  
  export default VolumeProgressBtn