import { BlockHeader } from "../../components/basicPage/BlockHeader"
import { Nav } from "../../components/mainWrappers/nav"
import { SkeletonTheme } from "react-loading-skeleton"
import * as S from "../../components/styles/mainMenu/mainMenuStyles"
import Filter from "../../components/basicPage/filter"
import SearchBar from "../../components/basicPage/searchBar"
import PlayListTitle from "../../components/musicPlayer/playListTitle"
import { SideBar } from "../../components/mainWrappers/sidebar"

const FavoriteTracks = () => {
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
      </SkeletonTheme>
      </S.CenterBlockContent>
      </S.MainCenterBlock>
      <SideBar/>
      </S.Main>
    </>
    )
}
  export default FavoriteTracks