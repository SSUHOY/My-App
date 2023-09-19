import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "../styles/musicPlayer/playerStyles";
import { formatTime } from "../../utils/formatTime";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentTrack,
  selectFavoriteTracks,
  selectIsPlaying,
} from "../../store/selectors/tracks";
import { LikeIcon, NoteIcon } from "./icons/playListIcons";

const PlayListItem = ({
  title,
  artist,
  album,
  time,
  item,
  loading,
  onClick,
  id,
  isFavorite,
}) => {
  const currentTrack = useSelector(selectCurrentTrack);
  const isPlaying = useSelector(selectIsPlaying);

//  const dispatch = useDispatch()

//   const handleSelectFavTrack = () => {
//     dispatch(selectFavoriteTracks());
//     console.log("Liked track:", currentTrack);
//   };


  return (
    <S.PlaylistItem className="PlayListItem" onClick={onClick}>
      <S.PlayListTrack>
        <S.TrackTitle>
          {loading ? (
            <Skeleton count={1} />
          ) : (
            <S.TrackTitleImg>
              {currentTrack && currentTrack.id === id && isPlaying ? (
                <S.StyledPlayingDot />
              ) : currentTrack && currentTrack.id === id ? (
                <S.StyledDot />
              ) : (
                <S.TrackTitleSvg alt="music">
                  <NoteIcon />
                </S.TrackTitleSvg>
              )}
            </S.TrackTitleImg>
          )}
          <S.TrackTitle>
            {loading ? (
              <Skeleton count={1} />
            ) : (
              <S.TrackTitleLink>
                {title}
                <S.TrackTitleSpan>
                  {item?.subtitle ? `(${item?.subtitle})` : ""}
                </S.TrackTitleSpan>
              </S.TrackTitleLink>
            )}
          </S.TrackTitle>
        </S.TrackTitle>
        <S.TrackAuthor>
          {loading ? (
            <Skeleton count={1} />
          ) : (
            <S.TrackAuthorLink href="http://">{artist}</S.TrackAuthorLink>
          )}
        </S.TrackAuthor>
        <S.TrackAlbum className="track__album">
          {loading ? (
            <Skeleton count={1} />
          ) : (
            <S.TrackAlbumLink href="http://">{album}</S.TrackAlbumLink>
          )}
        </S.TrackAlbum>
        {loading ? (
          <Skeleton count={1} />
        ) : (
          <S.LikeIconSvg
            onClick={(e) => {
              e.stopPropagation();
          console.log('Лайк нажат');
            }}>
            <LikeIcon />
          </S.LikeIconSvg>
        )}
        {loading ? (
          <Skeleton count={1} />
        ) : (
          <S.TrackTimeText>
            <>
              {" "}
              <S.TrackAlbumTimeSvg alt="time"></S.TrackAlbumTimeSvg>
              <S.TrackTimeText className="track__time-text">
                {formatTime(time)}
              </S.TrackTimeText>
            </>
          </S.TrackTimeText>
        )}
      </S.PlayListTrack>
    </S.PlaylistItem>
  );
};
export default PlayListItem;
