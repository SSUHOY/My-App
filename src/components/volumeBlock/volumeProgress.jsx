import  * as S from "../styles/volumeBlock/volumeBlockStyles"

const VolumeProgressBtn = ({ volume, onVolumeChange }) => {
    return (
      <S.VolumeProgressLine>
        <S.VolumeProgressLineInput type="range" name="range" volume={volume} onVolumeChange={onVolumeChange} />
      </S.VolumeProgressLine>
    )
  }
  
  export default VolumeProgressBtn