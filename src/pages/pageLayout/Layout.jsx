import Burger from "../../components/basicPage/burgerLine"
import Logo from "../../components/basicPage/logo"
import Menu from "../../components/basicPage/menu"
import { Container } from "../../components/mainWrappers/container"
import Footer from "../../components/mainWrappers/footer"
import GlobalStyling from "../../components/styles/global/global"
import { Outlet } from "react-router-dom"
import * as S from "../../components/styles/mainMenu/mainMenuStyles"
import SearchBar from "../../components/basicPage/searchBar"
import HeaderBlock from "../../components/basicPage/headerBlock"
import UserNameSideBar from "../../components/basicPage/userName"
import SidebarBlock from "../../components/sideBar/sideBarBlock"
import { useState } from "react"
import Main from "../../components/mainWrappers/main"
import { StyledHeader } from "../../components/styles/basicPage/blockHeaderStyle"
import { BlockHeader } from "../../components/basicPage/BlockHeader"



const Layout = () => {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <>
    <GlobalStyling/>
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
    {/* <BlockHeader title='Треки'/> */}
    </S.MainCenterBlock>
    <S.MainSideBar>
    <UserNameSideBar />
    </S.MainSideBar>
     <Outlet/>
    </S.Main>  
    </>
    )
}

export {Layout}