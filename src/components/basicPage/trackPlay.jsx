import * as S from "../styles/basicPage/basicPageStyles"


const TrackPlayImg = () => {
    return (
      <S.TrackPlayImg >
        <S.TrackPlaySvg alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </S.TrackPlaySvg>
      </S.TrackPlayImg>
    )
  }
  const TrackPlayArtist = () => {
    return (
      <S.TrackPlayAuthor>
        <S.TrackPlayAuthorLink href="http://">
          Ты та...
        </S.TrackPlayAuthorLink>
      </S.TrackPlayAuthor>
    )
  }
  
  const TrackPlayAlbum = () => {
    return (
      <S.TrackPlayAlbum >
        <S.TrackPlayAlbumLink href="http://">
          Баста
        </S.TrackPlayAlbumLink >
      </S.TrackPlayAlbum>
    )
  }
  
  const LikeDislike = () => {
    return (
      <S.TrackPlayLikeDis className="track-play__like-dis">
        <S.TrackPlayLike className="track-play__like _btn-icon">
          <svg alt="like" className="track-play__like-svg">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg >
        </S.TrackPlayLike>
        <S.TrackPlayDislike className="track-play__dislike _btn-icon">
          <svg className="track-play__dislike-svg" alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
          </svg>
        </S.TrackPlayDislike >
      </S.TrackPlayLikeDis >
    )
  }
  
  const TrackPlay = () => {
    return (
      <S.TrackPlayPlayer >
        <S.TrackPlayContain>
          <TrackPlayImg />
          <TrackPlayArtist />
          <TrackPlayAlbum />
        </S.TrackPlayContain>
        <LikeDislike />
      </S.TrackPlayPlayer>
    )
  }
  
  export default TrackPlay