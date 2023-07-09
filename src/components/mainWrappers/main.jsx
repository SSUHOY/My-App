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

export function Main({active, setActive}) {

  const [menuActive, setMenuActive] = useState(false)


    return (
        <main className="main">
        <nav className='main__nav nav'>
        <Logo />
        <div className="nav__burger burger" onClick={() => setMenuActive(!menuActive)}>
        <Burger />
        </div>
        <div className={active ? "nav__menu active" : "nav__menu"} onClick={()=> {
          setActive(false)
        }}>
         <Menu active={menuActive} setActive={setMenuActive}/>
        </div>
        </nav>
        <div className="main__centerblock centerblock">
        <SearchBar />
        <HeaderBlock />
        <Filter />
        <div className="centerblock__content"> 
        <SkeletonTheme baseColor="#313131" highlightColor="#444">
          <PlayListTitle />
          <div className="content__playlist playlist">
            <PlayListItem
              title="название трека"
              artist="артист"
              album="альбом"
              time="время"
            />
          </div></SkeletonTheme>
        </div>
        </div>
        <div className="main__sidebar sidebar">
        <UserNameSideBar userName="Имя пользователя" avatarImg="аватар" />
        <SidebarBlock />
        </div>
        </main>
    )
  }

export default Main
{/* <nav className="main__nav nav"> */}