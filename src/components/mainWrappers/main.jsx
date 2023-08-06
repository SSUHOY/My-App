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

export function Main({active, setActive, isLoading, currentTrack, setCurrentTrack}) {

  const [allTracks, setAllTracks] = useState([
  ]);
 
  useEffect(() => {
    getAllTracks().then((data) => {
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
                onClick={() => setCurrentTrack(track)}
                setCurrentTrack={setCurrentTrack}
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
