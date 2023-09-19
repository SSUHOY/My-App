import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import * as S  from "../styles/player/playerStyles"
import { formatTime } from "../../utils/formatTime"
import { useSelector } from "react-redux"
import { selectCurrentTrack, selectIsPlaying } from "../../store/selectors/tracks"
import { LikeIcon, NoteIcon } from "./icons/playListIcons"

const PlayListItem = ({ title, artist, album, time, item, loading, onClick, id }) => {
  const currentTrack = useSelector(selectCurrentTrack)
  const isPlaying = useSelector(selectIsPlaying)
  return (
      <S.PlaylistItem className="PlayListItem" onClick={onClick} >          
       <S.PlayListTrack>
  <S.TrackTitle >
    {loading ? (
      <Skeleton count={1} />
            ) : (
              <S.TrackTitleImg>
        {currentTrack && currentTrack.id === id && isPlaying? ( <S.StyledPlayingDot />): currentTrack && currentTrack.id === id ? (<S.StyledDot />) : (   <S.TrackTitleSvg alt="music">
       <NoteIcon/>
    </S.TrackTitleSvg>)}
    </S.TrackTitleImg>
               )}
    <S.TrackTitle>
    {loading ? (
      <Skeleton count={1} />
    ) : (
      <S.TrackTitleLink>
       {title}
        <S.TrackTitleSpan>
          {item?.subtitle ? `(${item?.subtitle})` : ''}
        </S.TrackTitleSpan >
      </S.TrackTitleLink>
    )}
    </S.TrackTitle>
  </S.TrackTitle>
  <S.TrackAuthor >
  {loading ? (
    <Skeleton count={1} />
  ) : (
    <S.TrackAuthorLink  href="http://">
   {artist}
    </S.TrackAuthorLink>
  )}
  </S.TrackAuthor >
  <S.TrackAlbum className="track__album">
  {loading ? (
    <Skeleton count={1} />
  ) : (
    <S.TrackAlbumLink  href="http://">
  {album}
    </S.TrackAlbumLink>
  )}
  </S.TrackAlbum>
  <LikeIcon/>
  <S.TrackTimeText>
  {loading ? (
    <Skeleton count={1} />
  ) : (
    <>
      {' '}   
      <S.TrackAlbumTimeSvg alt="time">
      </S.TrackAlbumTimeSvg>
      <S.TrackTimeText className="track__time-text">{formatTime(time)}</S.TrackTimeText >
    </>
  )}
  </S.TrackTimeText>
</S.PlayListTrack>
      </S.PlaylistItem>
    )
  }
  export default PlayListItem
  

