export const PlayerButtonPlay = ({ icon, alt, togglePlay }) => {
    const xlinkHref = `/img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`} onClick={togglePlay}>
        <svg className={`player__btn-${icon}-svg`}  >
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }
  
export const PlayerButtonNext = ({ icon, toggleNextTrack }) => {
    
    const xlinkHref = `/img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`}  onClick={toggleNextTrack}>
        <svg className={`player__btn-${icon}-svg`} >
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }

  export const PlayerButtonPrev = ({ icon, togglePrevTrack }) => {
    const xlinkHref = `/img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`}  onClick={togglePrevTrack}>
        <svg className={`player__btn-${icon}-svg`}  >
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }

  export const PlayerButtonShuffle = ({ icon, toggleShuffle}) => {
    const xlinkHref = `/img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`}  onClick={toggleShuffle}>
        <svg className={`player__btn-${icon}-svg`}>
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }

  export const PlayerButtonRepeat = ({ icon, toggleLoop }) => {
    const xlinkHref = `/img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`} onClick={toggleLoop}>
        <svg className={`player__btn-${icon}-svg`}  >
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }


  

  
