import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "../styles/musicPlayer/playerStyles";
import { formatTime } from "../../utils/formatTime";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsPlaying,
} from "../../store/selectors/tracks";
import { LikeIcon, NoteIcon } from "./icons/playListIcons";
import { setPlaylist, setTrack, toggleLike } from "../../store/actions/creators/tracks";
import { useAddToFavoritesMutation, useDeleteFromFavoritesMutation } from "../services/playlistApi";
import { useEffect } from "react";
import { getAllTracks } from "../../api";

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
  currentTrack,
}) => {
  const isPlaying = useSelector(selectIsPlaying);

  const [addToFavorites] = useAddToFavoritesMutation({ id });
  const [deleteFromFavorites] = useDeleteFromFavoritesMutation({ id });
  
  useEffect(() => {}, [toggleLike]);
  
  const dispatch = useDispatch();
  
  const handleLikeTrack = async () => {
    if (isFavorite) {
      await deleteFromFavorites(id);
    } else {
      await addToFavorites(id);
    }
    dispatch(toggleLike(id));
    console.log("Лайк нажат");
  
    const ReloadPage = () => {
      getAllTracks()
        .then((data) => {
          dispatch(setPlaylist(data));
        })
        .catch((error) => alert(error));
    };
    ReloadPage();
  };
  

  return (
    <S.PlaylistItem className="PlayListItem" onClick={onClick}>
      {loading ? (
        <Skeleton count={1} />
      ) : (
        <S.PlayListTrack>
          <S.TrackTitle>
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
            <S.TrackTitle>
              <S.TrackTitleLink>
                {title}
                <S.TrackTitleSpan>
                  {item?.subtitle ? `(${item?.subtitle})` : ""}
                </S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitle>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">{artist}</S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum className="track__album">
            <S.TrackAlbumLink href="http://">{album}</S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.LikeIconSvg
          alt = 'heart'
            onClick={(e) => {
              e.stopPropagation();
              handleLikeTrack();
            }}
            className={isFavorite ? "active" : ""}>
            <LikeIcon />
          </S.LikeIconSvg>
          <S.TrackTimeText>
            <>
              {" "}
              <S.TrackAlbumTimeSvg alt="time"></S.TrackAlbumTimeSvg>
              <S.TrackTimeText className="track__time-text">
                {formatTime(time)}
              </S.TrackTimeText>
            </>
          </S.TrackTimeText>
        </S.PlayListTrack>
      )}
    </S.PlaylistItem>
  );
};
export default PlayListItem;
