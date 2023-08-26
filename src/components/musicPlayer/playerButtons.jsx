import { useDispatch, useSelector } from "react-redux"
import { playlistSelector, shufflePlaylistSelector } from "../../store/selectors/tracks"

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
  
export const PlayerButtonNext = ({ icon, alt, currentTrack, setIsisShuffleActive,isShuffleActive  }) => {

  // const playlist = useSelector(playlistSelector)
  // const shufflePlaylist = useSelector(shufflePlaylistSelector)
  // const dispatch = useDispatch()

  // const obj = isShuffleActive ? { ...shufflePlaylist } : { ...playlist }
  // let index = Object.keys(obj).find((key) => obj[key].id === currentTrack.id)
  // console.log(index);

    
    const xlinkHref = `img/icon/sprite.svg#icon-${icon}`
    return (
      <div className={`player__btn-${icon} _btn`}>
        <svg className={`player__btn-${icon}-svg`} alt={alt} >
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


  

  
