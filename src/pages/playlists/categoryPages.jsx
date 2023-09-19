import { BlockHeader } from "../../components/basicPage/BlockHeader"
import { Nav } from "../../components/mainWrappers/nav"
import { SkeletonTheme } from "react-loading-skeleton"
import * as S from "../../components/styles/mainMenu/mainMenuStyles"
import SearchBar from "../../components/basicPage/searchBar"
import PlayListTitle from "../../components/musicPlayer/playListTitle"
import { SideBar } from "../../components/mainWrappers/sidebar"

import { useParams } from "react-router-dom"
import PlayListItem from "../../components/musicPlayer/playListItem"

export const Playlist = () => {
    const { id } = useParams()
  return (
    <S.Main>   
      <Nav/>
      <S.MainCenterBlock>
      <SearchBar />
    <BlockHeader title={id==1 && "Плейлист дня" || id==2 && "100 танцевальных хитов" || id==3 && "Инди-заряд"}/>
      <S.CenterBlockContent > 
      <SkeletonTheme baseColor="#313131" highlightColor="#444">
      <PlayListTitle />
      <S.PlaylistContent>
      <PlayListItem/>
      </S.PlaylistContent>
      </SkeletonTheme>
      </S.CenterBlockContent>
      </S.MainCenterBlock>
      <SideBar/>
      </S.Main>   
  )
}