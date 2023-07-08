const PlayerButton = ({ icon, alt }) => {
    const xlinkHref = `img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`}>
        <svg className={`player__btn-${icon}-svg`} alt={alt}>
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
    )
  }
  export default PlayerButton
  