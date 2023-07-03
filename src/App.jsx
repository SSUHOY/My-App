import './App.css';
import Menu from './components/menu'
import SearchBar from './components/searchBar'
import HeaderBlock from './components/headerBlock'
import Filter from './components/filter'
import PlayListTitle from './components/playListTitle'
import Logo from './components/logo';
import Burger from './components/burgerLine';
import PlayListItem from './components/playListItem';
import UserNameSideBar from './components/userName';
import SidebarBlock from './components/sideBarBlock';
import BarContentForm from './components/barContentForm';

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
          <UserNameSideBar userName="Имя пользователя" avatarImg="аватарка" />
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
