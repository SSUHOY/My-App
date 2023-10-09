import PlayerControls from '../musicPlayer/playerControls'
import TrackPlay, { LikeDislike, LikeDislikeContent } from './trackPlay'
import * as S from '../styles/basicPage/basicPageStyles'
import { useState } from 'react'
import VolumeBlock from '../volumeBlock/volumeBlock'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoop, selectIsPlaying } from '../../store/selectors/tracks'
import { nextTrack, pauseTrack, playTrack, setTrack } from '../../store/actions/creators/tracks'
import { useRef } from 'react'
import { ProgressBarTime } from './durationtimebar'
import {ProgressBar} from './progressbarinput'
import { useAddToFavoritesMutation, useDeleteFromFavoritesMutation, useGetFavoriteTracksQuery, useGetPlaylistQuery, useGetTracksQuery } from '../services/playlistApi'
import { LikeIcon } from '../musicPlayer/icons/playListIcons'
import { getAllTracks } from "../../api"
import { setPlaylist, toggleLike } from "../../store/actions/creators/tracks"

const BarPlayer = ({currentTrack, isFavorite, setIsFavorite}) => {

  const audioRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(30)
 
  const isPlayingFromStore = useSelector(selectIsPlaying)
  const isLoop = useSelector(selectIsLoop)
  const dispatch = useDispatch()
  
  useEffect(() => {
    setCurrentTime(0)
  }, [currentTrack])


  // Определение обработчика событий для обновления времени и продолжительности звука
  const handleTimeUpdate = () => {
    if(audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  }

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


// Поиск времени, когда пользователь указывает на определенное время в полосе поиска ProgressBar
  const handleSeekTrackTime = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
 };

// хук useEffect для добавления и удаления прослушивателя событий
useEffect(() => {
  if(audioRef.current) {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener('ended', handleTrackEnd)
  }
  return () => {
    if(audioRef.current) {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.removeEventListener('ended', handleTrackEnd)
    }
  };
}, []);
const id = currentTrack.id

const {data} = useGetFavoriteTracksQuery();

useEffect(() => {
  setIsFavorite(data ? Boolean(data.find(el => el.id === id)) : false);
}, [data, id]);


// Лайк трека
    const [addToFavorites] = useAddToFavoritesMutation({ id });
    const [deleteFromFavorites] = useDeleteFromFavoritesMutation({ id });
    
    const handleLikeTrack = async () => {
      if (isFavorite) {
        await deleteFromFavorites(id);
      } else {
        await addToFavorites(id);
      }
      dispatch(toggleLike(id));
      console.log("Лайк нажат");
    
      const ReloadPage = () => {
        console.log('Обновление');
        getAllTracks()
          .then((data) => {
            dispatch(setPlaylist(data));
            console.log(data);
          })
          .catch((error) => alert(error));
      };
      ReloadPage();
    };

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
            currentTrack={currentTrack}
            isFavorite={isFavorite}
            setIsFavorite={setIsFavorite} />
          <TrackPlay
            currentTrack={currentTrack}
          />
          <S.LikeIconSvgBarPlayer
            alt = 'heart'
            onClick={(e) => {
            e.stopPropagation();
            handleLikeTrack();
          }}
          className={isFavorite ? "active" : ""}
          >
          <LikeIcon />
          </S.LikeIconSvgBarPlayer>
          <VolumeBlock
            volume={volume}
            onVolumeChange={handleVolumeChange} />
    </S.BarPlayer>
    </S.BarPlayerBlock>
    </S.BarContent>
    
  )
}

export default BarPlayer