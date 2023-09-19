import * as S from "../styles/player/playerStyles"

const PlayListTitle = () => {
    return (
      <S.PlayListContentTitle>
        <S.PlayListTitleCol1>Трек</S.PlayListTitleCol1>
        <S.PlayListTitleCol2>ИСПОЛНИТЕЛЬ</S.PlayListTitleCol2 >
        <S.PlayListTitleCol3>АЛЬБОМ</S.PlayListTitleCol3 >
        <S.PlayListTitleCol4>
          <S.PlayListTitleSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </S.PlayListTitleSvg>
        </S.PlayListTitleCol4 >
      </S.PlayListContentTitle >
    )
  }
  
  export default PlayListTitle
  