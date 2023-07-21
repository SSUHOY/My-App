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
import { items } from "../playlistContent/items"
import { useEffect } from "react"
import * as S from "../styles/mainMenu/mainMenuStyles"




export function Main({active, setActive}) {

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
          {items.map((item,index) => (
              <PlayListItem key= {index} item={item} loading={loading} />
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
