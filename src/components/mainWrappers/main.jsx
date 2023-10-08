import { useMemo, useReducer, useState } from "react";
import Filter from "../basicPage/filter/filter";
import PlayListItem from "../musicPlayer/playListItem";
import PlayListTitle from "../musicPlayer/playListTitle";
import { SkeletonTheme } from "react-loading-skeleton";
import { useEffect } from "react";
import * as S from "../styles/mainMenu/mainMenuStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  playTrack,
  setPlaylist,
  setTrack,
} from "../../store/actions/creators/tracks";
import { Nav } from "./nav";
import { MainSideBar } from "./sidebar";
import { BlockHeader } from "../basicPage/BlockHeader";
import {
  selectAllTracks,
  selectCurrentTrack,
} from "../../store/selectors/tracks";
import { useGetTracksQuery } from "../services/playlistApi";
import SearchBar from "../basicPage/search/searchBar";

export function Main({ isPlaying, setIsPlaying }) {
  const { data } = useGetTracksQuery();
  const dispatch = useDispatch();

  const fetchAllTracks = useSelector(selectAllTracks);
  const currentTrack = useSelector(selectCurrentTrack);

  const [loading, setLoading] = useState(true);

 
  const artistNames = [...new Set(data?.map((track) => track.author))].sort();
  const genres = [...new Set(data?.map((track) => track.genre))].sort();

// Фильтр по вводу в строку поиска
const [searchText, setSearchText] = useState('')
 // фильтры по жанру и году
 const [selectedFilters, setSelectedFilters] = useState([{
  year: "", // Выбранный год выпуска
}]);
// Фильтр по жанру, множественный выбор 
const [selectedGenres, setSelectedGenres] = useState([])
const handleSelectedGenresChange = (genreName) => {
  setSelectedGenres((prevSelectedGenres) => {
  if (prevSelectedGenres.includes(genreName)) {
  return prevSelectedGenres.filter((item) => item !== genreName);
  } else {
  return [...prevSelectedGenres, genreName];
  }
});
};

// Филтры по артисту, множественный выбор
  const [selectedArtists, setSelectedArtists] = useState([])
  const handleSelectedArtistsChange = (artistName) => {
    setSelectedArtists((prevSelectedArtists) => {
    if (prevSelectedArtists.includes(artistName)) {
    return prevSelectedArtists.filter((item) => item !== artistName);
    } else {
    return [...prevSelectedArtists, artistName];
    }
  });
};
    
  const filteredSongs = useMemo(() => {
    let result = [...fetchAllTracks];
    if(searchText !== '') {
      result = result.filter((track) => track.name.toLowerCase().includes(searchText.toLowerCase()));
    }
    if (selectedArtists.length > 0) {
      result = result.filter((track) => selectedArtists.includes(track.author));
      }
   if (selectedGenres.length > 0) {
        result = result.filter((track) => selectedGenres.includes(track.genre));
      }
    if (selectedFilters.year === "New") {
      result.sort(
        (a, b) => new Date(a.release_date) - new Date(b.release_date)
      );
    } else if (selectedFilters.year === "Old") {
      result.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
    }
    return result;
  }, [fetchAllTracks, selectedFilters, selectedArtists, selectedGenres, searchText]);

  // запуск воспроизведения
  const handlePlayTrack = (track, index, playlist) => {
    dispatch(setTrack(track, index, playlist));
    dispatch(playTrack());
    console.log("Track Index:", index, currentTrack);
  };

  // получение всех треков
  useEffect(() => {
    if (data) {
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
        <SearchBar onChange={(value) => setSearchText(value)}/>
        <BlockHeader title="Треки" />
        <Filter
          tracks={data}
          value={selectedFilters}
          selectedFilters={selectedFilters}
          artistList={artistNames}
          genreList={genres}
          onArtistClick={handleSelectedArtistsChange}
          onGenreClick={handleSelectedGenresChange}
          selectedGenres={selectedGenres}
          selectedArtists={selectedArtists}
          onClickCategory={(category, value) =>
            setSelectedFilters((prevFilters) => ({
              ...prevFilters,
              [category]: value,
            }))
          }
        />
         {selectedArtists.length > 0 ? (
                <S.SelectedFiltersCircleArtists>
                  {selectedArtists.length}
                </S.SelectedFiltersCircleArtists>
              ) : null
              }
         {selectedGenres.length > 0 ? (
                <S.SelectedFiltersCircleGenres>
                  {selectedGenres.length}
                </S.SelectedFiltersCircleGenres>
              ) : null
              }
        <S.CenterBlockContent>
          <SkeletonTheme baseColor="#313131" highlightColor="#444">
            <PlayListTitle />
            <S.PlaylistContent>
              {filteredSongs.map((track, index) => (
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
              <S.NotFound>
              {searchText !== '' && filteredSongs?.length === 0 ? "Ничего не найдено" : null}
              </S.NotFound>
            </S.PlaylistContent>
          </SkeletonTheme>
        </S.CenterBlockContent>
      </S.MainCenterBlock>
      <MainSideBar />
    </S.Main>
  );
}

export default Main;


  //  const filteredTracks = data?data.filter((track) => {
  //   const { artist, year, genre } = selectedFilters;

  //   Фильтрация по исполнителю
  //   if (artist.length > 0 && !artist.includes(track.author)) {
  //     return false;
  //   }

  //   // Фильтрация по году выпуска
  //   if (year === "New" && track.release_year < 2000) {
  //     return false;
  //   }
  //   if (year === "Old" && track.release_year >= 2000) {
  //     return false;
  //   }

  //   // Фильтрация по жанру
  //   if (genre && genre !== track.genre) {
  //     return false;
  //   }

  //   return true; // Оставляем треки, которые соответствуют выбранным фильтрам
  // }):[];




// useEffect(() => {
//   if(filteredTracksByArtists.length > 0) {
//     // dispatch(setPlaylist(filteredTracksByArtists))
//   } if (filteredTracksByGenres.length > 0) {
//     // dispatch(setPlaylist(filteredTracksByGenres))
//     setSelectedTracks(filteredTracksByGenres)
//   }
//   return
// },[selectedGenres, selectedArtists])


  // const filteredTracks = useMemo(
  //   () => {
  //     const filterByArtists = fetchAllTracks.filter(track => track.author === selectedFilters.artist)
  //     return filterByArtists;
  //   } , [selectedFilters]
  //   )
    // console.log(filteredTracksByArtists);


  // useEffect(() => {
  //   const filterByArtists = fetchAllTracks.filter(track => track.author === selectedArtists)
  //   if(filterByArtists.length > 0) {
  //    dispatch(setPlaylist(filterByArtists))
  //     // setSelectedTracks(filteredTracksByArtists)
  //   }
  // }, [selectedArtists])

 
  //   const filteredTracksByGenres = useMemo(()=> {
  //     const filteredByGenres = fetchAllTracks.filter(track => track.genre === selectedGenres)
  //     return filteredByGenres
  //   }, [selectedGenres]
  //   )
  //   console.log(filteredTracksByGenres);

