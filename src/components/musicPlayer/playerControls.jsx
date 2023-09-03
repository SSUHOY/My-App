import * as S from "../styles/player/playerStyles"
import { PlayerButtonNext, PlayerButtonPlay, PlayerButtonPrev, PlayerButtonRepeat, PlayerButtonShuffle } from "./playerButtons"
import { useDispatch, useSelector } from "react-redux"
import { selectAllTracks, selectIsLoop, selectIsShuffle, selectShuffledTracks } from "../../store/selectors/tracks"
import { nextTrack, playTrack, prevTrack, setIsLoop, setIsShuffle} from "../../store/actions/creators/tracks"

const PlayerControls = ({togglePlay, isPlaying}) => {

  const dispatch = useDispatch()

  const isLoop = useSelector(selectIsLoop)
  const isShuffle = useSelector(selectIsShuffle)

  const handleToggleLoop = () => {
    dispatch(setIsLoop())
  }
  const handleNextTrack = () => {
    dispatch(nextTrack())
    dispatch(playTrack())
  }

  const handlePrevTrack = () => {
    dispatch(prevTrack())
    dispatch(playTrack())
  }

  const handleToggleShuffle = () => {
    dispatch(setIsShuffle())
    dispatch(playTrack())
  }

  return (
    <S.PlayerControls>
      <PlayerButtonPrev icon="prev" alt="prev" togglePrevTrack={handlePrevTrack}/>
      <PlayerButtonPlay icon={isPlaying ? 'pause' : 'play'} togglePlay={togglePlay}/>
      <PlayerButtonNext icon="next" alt="next" toggleNextTrack={handleNextTrack} />
      <PlayerButtonRepeat icon={isLoop ? 'repeated' : 'repeat'} alt="repeat" toggleLoop={handleToggleLoop} />
      <PlayerButtonShuffle icon={isShuffle ? "shuffled" :"shuffle"} alt="shuffle"  toggleShuffle={handleToggleShuffle}/>
    </S.PlayerControls>
  )
}

export default PlayerControls
