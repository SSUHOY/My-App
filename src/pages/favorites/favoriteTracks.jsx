import { BlockHeader } from "../../components/basicPage/BlockHeader"
import { Nav } from "../../components/mainWrappers/nav"
import { SkeletonTheme } from "react-loading-skeleton"
import * as S from "../../components/styles/mainMenu/mainMenuStyles"
import SearchBar from "../../components/basicPage/searchBar"
import PlayListTitle from "../../components/musicPlayer/playListTitle"
import { SideBar } from "../../components/mainWrappers/sidebar"
import PlayListItem from "../../components/musicPlayer/playListItem"
import { useDispatch, useSelector } from "react-redux"
import { getFavoriteTracks, playTrack, setTrack } from "../../store/actions/creators/tracks"
import { getFavTracks } from "../../api"
import { useState } from "react"
import { useEffect } from "react"
import { selectAllTracks, selectFavoriteTracks } from "../../store/selectors/tracks"
import { useGetFavoriteTracksQuery } from "../../components/services/playlistApi"



const FavoriteTracks = ({}) => {
  const {data, isLoading} = useGetFavoriteTracksQuery()
  const dispatch = useDispatch()
  const favoriteTracksFromStore = useSelector(selectFavoriteTracks)
  console.log('fav tracks' , favoriteTracksFromStore);

const [loading, setLoading] = useState(true);
// получение треков из понравившихся
useEffect(() => {
if(data) {
  dispatch(getFavoriteTracks(data))
}
}, [data, dispatch]);

 const handlePlayTrack = (track) => {
  dispatch(setTrack(track));
  dispatch(playTrack());
  console.log("Track Index:");
};


  // таймер для skeletona
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <S.Main>
      <Nav/>
      <S.MainCenterBlock>
      <SearchBar />
      <BlockHeader title="Мои треки" />  
      <S.CenterBlockContent > 
      <SkeletonTheme baseColor="#313131" highlightColor="#444">
      <PlayListTitle />
      <S.PlaylistContent>
        {favoriteTracksFromStore.map((track, index) =>
           (<PlayListItem
                  onClick={() => handlePlayTrack(track)}
                  loading={loading}
                  title={track.name}
                  artist={track.author}
                  album={track.album}
                  subtitle={track.release_date}
                  time={track.duration_in_seconds}
                  key={index}
                  id ={track.id}
                  isFavorite={track.isFavorite}
           /> ))}
      {favoriteTracksFromStore.length === 0 && 'В этом плейлисте нет треков'}
      </S.PlaylistContent>
      </SkeletonTheme>
      </S.CenterBlockContent>
      </S.MainCenterBlock>
      <SideBar/>
      </S.Main>
    </>
    )
}
  export default FavoriteTracks