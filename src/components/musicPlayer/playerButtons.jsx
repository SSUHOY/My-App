export const PlayerButtonPlay = ({ icon, alt, togglePlay }) => {
    const xlinkHref = `img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`} onClick={togglePlay}>
        <svg className={`player__btn-${icon}-svg`} alt={alt}   >
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }
  
export const PlayerButtonNext = ({ icon, alt, toggleNextTrack }) => {
    
    const xlinkHref = `img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`}>
        <svg className={`player__btn-${icon}-svg`} alt={alt} onClick={toggleNextTrack}>
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }

  export const PlayerButtonPrev = ({ icon, alt, togglePrevTrack }) => {
    const xlinkHref = `img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`}>
        <svg className={`player__btn-${icon}-svg`} alt={alt}  onClick={togglePrevTrack} >
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }

  export const PlayerButtonShuffle = ({ icon, alt, toggleShuffle}) => {
    const xlinkHref = `img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`}>
        <svg className={`player__btn-${icon}-svg`} alt={alt} onClick={toggleShuffle}>
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }

  export const PlayerButtonRepeat = ({ icon, alt, toggleLoop }) => {
    const xlinkHref = `img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`}>
        <svg className={`player__btn-${icon}-svg`} alt={alt}  onClick={toggleLoop} >
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }


  

  
