import PlayerControls from '../musicPlayer/playerControls'
import TrackPlay from './trackPlay'
import * as S from '../styles/basicPage/basicPageStyles'
import ProgressBarTime from './progressBarTime'
import ProgressBar from './progressBar'
import { useState } from 'react'
import VolumeBlock from '../volumeBlock/volumeBlock'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoop, selectIsPlaying } from '../../store/selectors/tracks'
import { pauseTrack, playTrack } from '../../store/actions/creators/tracks'

const BarPlayer = ({currentTrack, audioRef}) => {

  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(30)
 
  const isPlayingFromStore = useSelector(selectIsPlaying)
  const isLoop = useSelector(selectIsLoop)
  const dispatch = useDispatch()
  
  useEffect(() => {
    setCurrentTime(0)
  }, [currentTrack])


    const handleStart = () => {
      dispatch(playTrack())
      audioRef.current.play();
  } 

  const handleTrackEnd = () => {
    dispatch(nextTrack())
  }
    
  const handleStop = () => {
    dispatch(pauseTrack())
    audioRef.current.pause();
  };
  

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
}, []);

  return  (
    <S.BarContent >
      <ProgressBarTime
        currentTime={currentTime}
        duration={duration} />
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
            isLoop={isLoop}
            isPlaying={isPlayingFromStore}
            currentTrack={currentTrack} />
          <TrackPlay
            currentTrack={currentTrack}
          />
          <VolumeBlock
            volume={volume}
            onVolumeChange={handleVolumeChange} />
    </S.BarPlayer>
    </S.BarPlayerBlock>
    </S.BarContent>
    
  )
}

export default BarPlayer