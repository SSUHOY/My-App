import { BlockHeader } from "../../components/basicPage/BlockHeader"
import { Nav } from "../../components/mainWrappers/nav"
import { SkeletonTheme } from "react-loading-skeleton"
import * as S from "../../components/styles/mainMenu/mainMenuStyles"
import PlayListTitle from "../../components/musicPlayer/playListTitle"
import { SideBar } from "../../components/mainWrappers/sidebar"
import { useParams } from "react-router-dom"
import PlayListItem from "../../components/musicPlayer/playListItem"
import { useDispatch, useSelector } from "react-redux"
import { playTrack, selectPlaylistCategories, setTrack } from "../../store/actions/creators/tracks"
import { useGetCatalogSectionTracksQuery } from "../../components/services/catalogSelectionApi"
import { useEffect } from "react"
import { selectPlaylist } from "../../store/selectors/tracks"
import { useState } from "react"
import SearchBar from "../../components/basicPage/search/searchBar"

export const Playlist = () => {
    const { id } = useParams()
    const {data} = useGetCatalogSectionTracksQuery(id);
 
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (data) {
        dispatch(selectPlaylistCategories(data));
      }
    }, [data, dispatch]);
    
    const handlePlayTrack = (track, index, playlist) => {
      dispatch(setTrack(track, index, playlist));
      dispatch(playTrack());
      console.log("Track Index:", index);
    };

      // таймер для skeletona
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
    const tracks = data?.items || []

  return (
    <S.Main>
    <Nav />
    <S.MainCenterBlock>
      <SearchBar />
        <BlockHeader
          title={
            (id == 1 && "Классическая музыка") ||
            (id == 2 && "Электронная музыка") ||
            (id == 3 && "Рок-музыка")
          }
        />
      <S.CenterBlockContent>
        <SkeletonTheme baseColor="#313131" highlightColor="#444">
          <PlayListTitle />
          <S.PlaylistContent>
            {tracks.map((track, index) => (
              <PlayListItem
                onClick={() => handlePlayTrack(track, index)}
                key={id}
                loading={loading}
                title={track.name}
                artist={track.author}
                album={track.album}
                subtitle={track.release_date}
                time={track.duration_in_seconds}
                id={track.id}
                isFavorite={track.isFavorite}
              />
            ))}
          </S.PlaylistContent>
        </SkeletonTheme>
      </S.CenterBlockContent>
    </S.MainCenterBlock>
    <SideBar />
  </S.Main>
  )
}