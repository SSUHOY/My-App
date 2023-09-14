import { BlockHeader } from "../../components/basicPage/BlockHeader"
import { Nav } from "../../components/mainWrappers/nav"
import { SkeletonTheme } from "react-loading-skeleton"
import * as S from "../../components/styles/mainMenu/mainMenuStyles"
import Filter from "../../components/basicPage/filter"
import SearchBar from "../../components/basicPage/searchBar"
import PlayListTitle from "../../components/musicPlayer/playListTitle"
import { SideBar } from "../../components/mainWrappers/sidebar"
import PlayListItem from "../../components/musicPlayer/playListItem"
import { useEffect, useState } from "react"
import { getAllTracks } from "../../api"
import { setPlaylist } from "../../store/actions/creators/tracks"
import { useDispatch } from "react-redux"

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
      {/* мок данные можно захардкодить в стейте или в коде */}
      <S.PlaylistContent>
      <PlayListItem/>
      </S.PlaylistContent>
      </SkeletonTheme>
      </S.CenterBlockContent>
      </S.MainCenterBlock>
      <SideBar/>
      </S.Main>
    </>
    )
}
  export default FavoriteTracks