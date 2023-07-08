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

export function Main({active, setActive}) {
    return (
        <main className="main">
        <nav className={active ? 'menu active' : 'main__nav nav'}>
        <Logo />
        <Burger  />
        <Menu/>
        </nav>
        <div className="main__centerblock centerblock">
        <SearchBar />
        <HeaderBlock />
        <Filter />
        <div className="centerblock__content">
          <PlayListTitle />
          <div className="content__playlist playlist">
            <PlayListItem
              title="название трека"
              artist="артист"
              album="альбом"
              time="время"
            />
          </div>
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