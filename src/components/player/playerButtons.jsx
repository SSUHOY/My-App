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

  
  export const PlayerButtonNext = ({ icon, alt }) => {
    const xlinkHref = `img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`}>
        <svg className={`player__btn-${icon}-svg`} alt={alt}  onClick={()=>alert('Функция пока не реализована')} >
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }

  export const PlayerButtonPrev = ({ icon, alt }) => {
    const xlinkHref = `img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`}>
        <svg className={`player__btn-${icon}-svg`} alt={alt}  onClick={()=>alert('Функция пока не реализована')} >
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }

  export const PlayerButtonShuffle = ({ icon, alt}) => {
    const xlinkHref = `img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`}>
        <svg className={`player__btn-${icon}-svg`} alt={alt} onClick={()=>alert('Функция пока не реализована')}  >
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }

  export const PlayerButtonRepeat = ({ icon, alt, togglePlay, toggleNext }) => {
    const xlinkHref = `img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`}>
        <svg className={`player__btn-${icon}-svg`} alt={alt}   >
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }


  

  
