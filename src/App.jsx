import './App.css';
import Menu from './components/basicPage_components/menu'
import SearchBar from './components/basicPage_components/searchBar'
import HeaderBlock from './components/basicPage_components/headerBlock'
import Filter from './components/basicPage_components/filter'
import PlayListTitle from './components/player_components/playListTitle'
import Logo from './components/basicPage_components/logo';
import Burger from './components/basicPage_components/burgerLine';
import PlayListItem from './components/player_components/playListItem';
import UserNameSideBar from './components/basicPage_components/userName';
import SidebarBlock from './components/sideBar_components/sideBarBlock';
import BarContentForm from './components/basicPage_components/barContentForm';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
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
      <div className="bar">
        <BarContentForm />
      </div>
      <footer className="footer"></footer>
    </div>
  </div>
  )
}

export default App;
