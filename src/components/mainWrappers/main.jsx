import { useState } from "react";
import Filter from "../basicPage/filter";
import SearchBar from "../basicPage/searchBar";
import PlayListItem from "../musicPlayer/playListItem";
import PlayListTitle from "../musicPlayer/playListTitle";
import { SkeletonTheme } from "react-loading-skeleton";
import { useEffect } from "react";
import * as S from "../styles/mainMenu/mainMenuStyles";
import { getAllTracks } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import {
  playTrack,
  setPlaylist,
  setTrack,
} from "../../store/actions/creators/tracks";
import { Nav } from "./nav";
import { MainSideBar } from "./sidebar";
import { BlockHeader } from "../basicPage/BlockHeader";
import { selectCurrentTrack } from "../../store/selectors/tracks";

export function Main({ isPlaying, setIsPlaying }) {
  // получаем currentTrack из стора
  const currentTrack = useSelector(selectCurrentTrack)
  const [allTracks, setAllTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // запуск воспроизведения
  const handlePlayTrack = (track, index) => {
    dispatch(setTrack(track, index));
    dispatch(playTrack());
    console.log("Track Index:", index, currentTrack);
  };

  // получение всех треков
  useEffect(() => {
    getAllTracks()
      .then((data) => {
        setAllTracks(data);
        dispatch(setPlaylist(data));
      })
      .catch((error) => alert(error));
  }, []);

  // таймер для skeletona
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Main>
      <Nav />
      <S.MainCenterBlock>
        <SearchBar />
        <BlockHeader title="Треки" />
        <Filter />
        <S.CenterBlockContent>
          <SkeletonTheme baseColor="#313131" highlightColor="#444">
            <PlayListTitle />
            <S.PlaylistContent>
              {allTracks.map((track, index) => (
                <PlayListItem
                  onClick={() => handlePlayTrack(track, index)}
                  currentTrack={currentTrack}
                  key={index}
                  title={track.name}
                  artist={track.author}
                  album={track.album}
                  subtitle={track.release_date}
                  time={track.duration_in_seconds}
                  loading={loading}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  id={track.id}
                  isFavorite={track.isFavorite}
                />
              ))}
            </S.PlaylistContent>
          </SkeletonTheme>
        </S.CenterBlockContent>
      </S.MainCenterBlock>
      <MainSideBar/>
    </S.Main>
  );
}

export default Main;
