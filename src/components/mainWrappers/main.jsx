import { useState } from "react"
import Burger from "../basicPage/burgerLine"
import Filter from "../basicPage/filter"
import HeaderBlock from "../basicPage/headerBlock"
import Logo from "../basicPage/logo"
import Menu from "../basicPage/menu"
import SearchBar from "../basicPage/searchBar"
import UserNameSideBar from "../basicPage/userName"
import PlayListItem from "../player/playListItem"
import PlayListTitle from "../player/playListTitle"
import SidebarBlock from "../sideBar/sideBarBlock"
import { SkeletonTheme } from "react-loading-skeleton"
import { useEffect } from "react"
import * as S from "../styles/mainMenu/mainMenuStyles"
import { getAllTracks } from "../../api"
import { items } from "../playlistContent/items"

export function Main({active, setActive, isLoading}) {

  const [allTracks, setAllTracks] = useState([
  ]);
  
  const[currentTrack, setCurrentTrack] = useState(null)

  const handlePlayTrackClick = (track) => {
  setCurrentTrack(track);
  }

  useEffect(() => {
    getAllTracks().then((data) => {
      console.log(data)
      setAllTracks(data)
    })
  }, [])

   const [loading,setLoading] = useState(true)
  useEffect(() => {
     const timer = setTimeout(() => {
      setLoading(false)
    }, 5000);
    return () => clearTimeout(timer)
    }, [])

   const [menuActive, setMenuActive] = useState(false)

   
    return (
        <S.Main>
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
          {allTracks.map((track) => (
                <PlayListItem
                onClick={() =>handlePlayTrackClick(track)}


                key={track.id}
                title={track.name}
                artist={track.author}
                album={track.album}
                time={track.duration_in_seconds}
                isLoading={isLoading}
                allTracks={allTracks}
              // setPlayTrack={setPlayTrack}
              // playTrack={playTrack}
              />
            ))}
          </div></SkeletonTheme>
        </S.CenterBlockContent>
        </S.MainCenterBlock>
        <S.MainSideBar>
        <UserNameSideBar userName="Имя пользователя" avatarImg="" />
        <SidebarBlock />
        </S.MainSideBar>
        </S.Main>
    )
  }

export default Main
