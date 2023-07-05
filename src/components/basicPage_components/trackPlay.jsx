const TrackPlayImg = () => {
    return (
      <div className="track-play__image">
        <svg className="track-play__svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
    )
  }
  const TrackPlayArtist = () => {
    return (
      <div className="track-play__author">
        <a className="track-play__author-link" href="http://">
          Ты та...
        </a>
      </div>
    )
  }
  
  const TrackPlayAlbum = () => {
    return (
      <div className="track-play__album">
        <a className="track-play__album-link" href="http://">
          Баста
        </a>
      </div>
    )
  }
  
  const LikeDislike = () => {
    return (
      <div className="track-play__like-dis">
        <div className="track-play__like _btn-icon">
          <svg className="track-play__like-svg" alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
        </div>
        <div className="track-play__dislike _btn-icon">
          <svg className="track-play__dislike-svg" alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
          </svg>
        </div>
      </div>
    )
  }
  
  const TrackPlay = () => {
    return (
      <div className="player__track-play track-play">
        <div className="track-play__contain">
          <TrackPlayImg />
          <TrackPlayArtist />
          <TrackPlayAlbum />
        </div>
        <LikeDislike />
      </div>
    )
  }
  
  export default TrackPlay