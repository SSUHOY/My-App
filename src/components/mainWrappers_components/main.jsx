import Burger from "../basicPage_components/burgerLine"
import Filter from "../basicPage_components/filter"
import HeaderBlock from "../basicPage_components/headerBlock"
import Logo from "../basicPage_components/logo"
import Menu from "../basicPage_components/menu"
import SearchBar from "../basicPage_components/searchBar"
import UserNameSideBar from "../basicPage_components/userName"
import PlayListItem from "../player_components/playListItem"
import PlayListTitle from "../player_components/playListTitle"
import SidebarBlock from "../sideBar_components/sideBarBlock"

export function Main() {
    return (
        <main className="main">
        <nav className="main__nav nav">
        <Logo />
        <Burger />
        <Menu />
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
