import PlayerControls from '../player/playerControls'
import TrackPlay from './trackPlay'
import * as S from '../styles/basicPage/basicPageStyles'
import ProgressBarTime from './ProgressBarTime'
import ProgressBar from './ProgressBar'
import { useRef, useState } from 'react'
import VolumeBlock from '../volumeBlock/volumeBlock'

const BarPlayer = ({currentTrack,setCurrentTrack}) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30)
  const [isLoop, setIsLoop] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [realDuration, setRealDuration] = useState(0)

  const handleTimeChange = (newTime) => {
    setCurrentTime(newTime)
    audioRef.current.currentTime = newTime
  }

  const audioRef = useRef(null);

  // Состояние play
  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
  // Состояние stop
  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  // Состояние проигрывать loop
  const toggleLoop = () => {
    setIsLoop((prev) => !prev)
  }

  const togglePlay = isPlaying ? handleStop : handleStart;

  const handleVolumeChange = (shiftVolume) =>{
    setVolume(shiftVolume)
    audioRef.current.volume = shiftVolume / 100
  }

  return currentTrack ? (
    
    <S.BarPlayer>
        <ProgressBarTime currentTime={currentTime} totalTime={realDuration} />
        <ProgressBar   
        duration={realDuration}
        currentTime={currentTime}
        onTimeChange={handleTimeChange}/>
        <audio 
        autoPlay
        loop={isLoop}
        src={currentTrack.track_file}
        type="audio/mpeg"
        ref={audioRef}>
      <source src="/music/song.mp3" type="audio/mpeg" />
        </audio>
        <PlayerControls togglePlay={togglePlay} toggleLoop={toggleLoop} isLoop={isLoop} isPlaying={isPlaying}/>
      <TrackPlay currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}/>
      <VolumeBlock  volume={volume} onVolumeChange={handleVolumeChange}/>
    </S.BarPlayer>
    
  ):null
}

export default BarPlayer