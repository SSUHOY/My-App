import { BlockHeader } from "../../components/basicPage/BlockHeader"
import { Nav } from "../../components/mainWrappers/nav"
import { SkeletonTheme } from "react-loading-skeleton"
import * as S from "../../components/styles/mainMenu/mainMenuStyles"
import SearchBar from "../../components/basicPage/searchBar"
import PlayListTitle from "../../components/musicPlayer/playListTitle"
import { SideBar } from "../../components/mainWrappers/sidebar"
import PlayListItem from "../../components/musicPlayer/playListItem"
import { useDispatch, useSelector } from "react-redux"
import { playTrack, setTrack } from "../../store/actions/creators/tracks"
import { getFavTracks } from "../../api"
import { useState } from "react"
import { useEffect } from "react"



const FavoriteTracks = () => {

// const FavoriteTracksSel =
//  useSelector((store) => store.player.favoriteTracks)
const [favTracks, setFavTracks] = useState([]);
// получение треков из понравившихся
console.log(favTracks);

useEffect(() => {
  getFavTracks()
    .then((items) => {
      setFavTracks(items);
    })
    .catch((error) => alert(error));
}, []);

 const dispatch = useDispatch()

 const handlePlayTrack = (track) => {
  dispatch(setTrack(track));
  dispatch(playTrack());
  console.log("Track Index:");
};

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
        {favTracks.map((track) =>
           (<PlayListItem
                  onClick={() => handlePlayTrack(track)}
                  // loading={loading}
                  title={track.name}
                  artist={track.author}
                  album={track.album}
                  subtitle={track.release_date}
                  time={track.duration_in_seconds}
                  key={track.id}
                  isFavorite={track.isFavorite}
           /> ))}
      {/* делать проверку на наличие треков из понравившихся */}
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