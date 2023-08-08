const PlayerButton = ({ icon, alt, togglePlay }) => {
    const xlinkHref = `img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`} onClick={togglePlay}>
        <svg className={`player__btn-${icon}-svg`} alt={alt} >
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }
  export default PlayerButton
  