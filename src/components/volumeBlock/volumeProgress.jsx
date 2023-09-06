import  * as S from "../styles/volumeBlock/volumeBlockStyles"

const VolumeProgressBtn = ({ volume, onVolumeChange }) => {

  const handleVolumeChange = (event) => {
    const shiftVolume = event.target.value
    onVolumeChange(shiftVolume)
    
    }
    return (
      <S.VolumeProgressLine>
        <S.VolumeProgressLineInput  type="range"
        name="range"
        min={0}
        max={100}
        value={volume}
        onChange={handleVolumeChange}
        $progress={volume} />
      </S.VolumeProgressLine>
    )
  }
  
  export default VolumeProgressBtn