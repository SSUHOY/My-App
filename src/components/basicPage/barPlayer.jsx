import PlayerControls from '../musicPlayer/playerControls'
import TrackPlay from './trackPlay'
import * as S from '../styles/basicPage/basicPageStyles'
import ProgressBarTime from './ProgressBarTime'
import ProgressBar from './ProgressBar'
import { useRef, useState } from 'react'
import VolumeBlock from '../volumeBlock/volumeBlock'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentTrack, selectIsPlaying } from '../../store/selectors/tracks'
import { pauseTrack, playTrack } from '../../store/actions/creators/tracks'

const BarPlayer = ({currentTrack,setCurrentTrack, setIsPlaying, isPlaying}) => {


  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(30)
  const [isLoop, setIsLoop] = useState(false)
 
  const isPlayingFromStore = useSelector(selectIsPlaying)
  const selectedTrack = useSelector(selectCurrentTrack)
  const dispatch = useDispatch()
  
  const audioRef = useRef(null);

  useEffect(() => {
    setCurrentTime(0)
    setIsLoop(false)
  }, [currentTrack])


    const handleStart = () => {
      dispatch(playTrack())
      audioRef.current.play();
      // setIsPlaying(true);
      console.log('play', isPlayingFromStore);
    } 
  
 
  const handleStop = () => {
    dispatch(pauseTrack())
    audioRef.current.pause();
    // setIsPlaying(false);
    console.log('stop:', isPlayingFromStore)
  };
  
  const toggleLoop = () => {
    setIsLoop((prev) => !prev)
  }

  const togglePlay = isPlayingFromStore ? handleStop : handleStart;

  const handleVolumeChange = (shiftVolume) =>{
    setVolume(shiftVolume)
    audioRef.current.volume = shiftVolume / 100
  }
// Определение обработчика событий для обновления времени и продолжительности звука
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  }

// Поиск времени, когда пользователь указывает на определенное время в полосе поиска ProgressBar
  const handleSeekTrackTime = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
 };

// хук useEffect для добавления и удаления прослушивателя событий
useEffect(() => {
  audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
  return () => {
    audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
  };
}, [currentTrack]);

  return  (
    <S.BarContent >
        <ProgressBarTime currentTime={currentTime} duration={duration} />
       <ProgressBar   
         duration={duration}
         currentTime={currentTime}
         handleTimeUpdate={handleTimeUpdate}
         handleSeekTrackTime={handleSeekTrackTime}
         onChange={handleSeekTrackTime}/>
    <S.BarPlayerBlock >
    <S.BarPlayer>
        <audio 
        autoPlay
        loop={isLoop}
        src={currentTrack.track_file}
        ref={audioRef}>
      <source src="/music/song.mp3" type="audio/mpeg" />
        </audio>
          <PlayerControls
            togglePlay={togglePlay}
            toggleLoop={toggleLoop}
            isLoop={isLoop}
            isPlaying={isPlaying}
            currentTrack={currentTrack} />
      <TrackPlay currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}/>
      <VolumeBlock  volume={volume} onVolumeChange={handleVolumeChange}/>
    </S.BarPlayer>
    </S.BarPlayerBlock>
    </S.BarContent>
    
  )
}

export default BarPlayer