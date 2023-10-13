import * as S from "../styles/volumeBlock/volumeBlockStyles"

const VolumeImg = () => {
    return (
      <S.VolumeImg>
        <S.VolumeSvg alt="volume">
          <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
        </S.VolumeSvg>
      </S.VolumeImg>
    )
  }
  
  export default VolumeImg