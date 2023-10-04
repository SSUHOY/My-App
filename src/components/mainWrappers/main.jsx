import { useMemo, useState } from "react";
import Filter from "../basicPage/filter/filter";
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
import { selectAllTracks, selectCurrentTrack } from "../../store/selectors/tracks";
import { useGetTracksQuery } from "../services/playlistApi";
import SearchBar from "../basicPage/search/searchBar";

export function Main({ isPlaying, setIsPlaying }) {
  const {data} = useGetTracksQuery()
  // получаем currentTrack из стора
  const fetchAllTracks = useSelector(selectAllTracks)
  const currentTrack = useSelector(selectCurrentTrack)
  const [loading, setLoading] = useState(true);


    // / фильтры
    const [filterCategory, setFilterCategory] = useState([]);
    const [selectedArtists, setSelectedArtists] = useState([])
    console.log(selectedArtists);
    const [selectedGenres, setSelectedGenres] = useState([])


  const artistNames = [...new Set(data?.map((track) => track.author))].sort()
  useEffect(() => {}, [selectedArtists])

  const filteredTracksByArtists = useMemo(
    () => {
      const filterByArtists = fetchAllTracks.filter(track => track.author === selectedArtists)
      const filterByGenres = fetchAllTracks.filter(track => track.author === selectedGenres)
   
      return filterByArtists
  
 } , [selectedArtists]
    )
console.log(filteredTracksByArtists);

  const dispatch = useDispatch();

  // запуск воспроизведения
  const handlePlayTrack = (track, index, playlist) => {
    dispatch(setTrack(track, index, playlist));
    dispatch(playTrack());
    console.log("Track Index:", index, currentTrack);
  };

  // получение всех треков
  useEffect(() => {
   if(data) {
    dispatch(setPlaylist(data));
   }
  }, [data, dispatch]);

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
        <SearchBar/>
        <BlockHeader title="Треки" />
        <Filter tracks={data} value={filterCategory}  onClickCategory={(artistNames) => setSelectedArtists(artistNames)} artistList={artistNames}/>
        <S.CenterBlockContent>
          <SkeletonTheme baseColor="#313131" highlightColor="#444">
            <PlayListTitle />
            <S.PlaylistContent>
              {fetchAllTracks.map((track, index) => (
                <PlayListItem
                  onClick={() => handlePlayTrack(track, index)}
                  track={track}
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
                  fetchAllTracks={fetchAllTracks}
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
