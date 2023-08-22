import PlayerControls from '../musicPlayer/playerControls'
import TrackPlay from './trackPlay'
import * as S from '../styles/basicPage/basicPageStyles'
import ProgressBarTime from './ProgressBarTime'
import ProgressBar from './ProgressBar'
import { useRef, useState } from 'react'
import VolumeBlock from '../volumeBlock/volumeBlock'
import { useEffect } from 'react'

const BarPlayer = ({currentTrack,setCurrentTrack}) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)


  const [volume, setVolume] = useState(30)
  const [isLoop, setIsLoop] = useState(false)
 
  
  const audioRef = useRef(null);

  useEffect(() => {
    setCurrentTime(0)
    setIsLoop(false)
  }, [currentTrack])


  useEffect(() => {
    setIsPlaying(true)
  }, [setCurrentTrack])

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
 
  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  
  const toggleLoop = () => {
    setIsLoop((prev) => !prev)
  }

  const togglePlay = isPlaying ? handleStop : handleStart;

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
        // onTimeupdate={handleTimeUpdate}
        ref={audioRef}>
      <source src="/music/song.mp3" type="audio/mpeg" />
        </audio>
        <PlayerControls togglePlay={togglePlay} toggleLoop={toggleLoop} isLoop={isLoop} isPlaying={isPlaying}/>
      <TrackPlay currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}/>
      <VolumeBlock  volume={volume} onVolumeChange={handleVolumeChange}/>
    </S.BarPlayer>
    </S.BarPlayerBlock>
    </S.BarContent>
    
  )
}

export default BarPlayer