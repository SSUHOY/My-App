import { useState } from "react"
import Filter from "../basicPage/filter"
import HeaderBlock from "../basicPage/headerBlock"
import SearchBar from "../basicPage/searchBar"
import PlayListItem from "../musicPlayer/playListItem"
import PlayListTitle from "../musicPlayer/playListTitle"
import { SkeletonTheme } from "react-loading-skeleton"
import { useEffect } from "react"
import * as S from "../styles/mainMenu/mainMenuStyles"
import { getAllTracks } from "../../api"
import { useDispatch, useSelector } from "react-redux"
import { playTrack, setPlaylist, setTrack } from "../../store/actions/creators/tracks"
import { selectCurrentTrack } from "../../store/selectors/tracks"
import { Nav } from "./nav"
import { MainSideBar, SideBar } from "./sidebar"
import { BlockHeader } from "../basicPage/BlockHeader"

export function Main() {
  // получаем currentTrack из стора
  const currentTrack = useSelector(selectCurrentTrack);
  const dispatch = useDispatch();

  const handlePlayTrack = (track, index) => {
    dispatch(setTrack(track, index))
    dispatch(playTrack())
    console.log('Track Index:', index, currentTrack)
  }

  const [allTracks, setAllTracks] = useState([
  ]);
 
  useEffect(() => {
    getAllTracks().then((data) => {
      setAllTracks(data)
      dispatch(setPlaylist(data))
    }).catch((error) => alert(error))
  }, [])

  const [loading, setLoading] = useState(true)
  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000);
    return () => clearTimeout(timer)
    }, [])
    return (
      <S.Main>   
      <Nav/>
      <S.MainCenterBlock>
      <SearchBar />
      <BlockHeader title="Треки"/>
      <Filter />
      <S.CenterBlockContent > 
      <SkeletonTheme baseColor="#313131" highlightColor="#444">
        <PlayListTitle />
        <S.PlaylistContent>
        {allTracks.map((track) => (
              <PlayListItem
              onClick={() => setCurrentTrack(track)}
             currentTrack={currentTrack}
              key={track.id}
              title={track.name}
              artist={track.author}
              album={track.album}
              subtitle={track.release_date}
              time={track.duration_in_seconds}
                          loading={loading}
             />
          ))}
        </S.PlaylistContent></SkeletonTheme>
      </S.CenterBlockContent>
      </S.MainCenterBlock>
      <MainSideBar/>
      </S.Main>
    )
  }

export default Main


{/* <S.Main>   
        <S.MainNav>
        <Logo />
        <S.NavBurger onClick={() => setMenuActive(!menuActive)}>
        <Burger />
        </S.NavBurger>
        <S.NavMenu active={menuActive}>
         <Menu active={menuActive} setActive={setMenuActive}/>
        </S.NavMenu>
        </S.MainNav>
        <S.MainCenterBlock>
        <SearchBar />
        <HeaderBlock />
        <Filter />
        <S.CenterBlockContent > 
        <SkeletonTheme baseColor="#313131" highlightColor="#444">
          <PlayListTitle />
          <div className="content__playlist playlist">
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
               />
            ))}
          </div></SkeletonTheme>
        </S.CenterBlockContent>
        </S.MainCenterBlock>
        <S.MainSideBar>
        <UserNameSideBar />
        <SidebarBlock />
        </S.MainSideBar>
        </S.Main> */}