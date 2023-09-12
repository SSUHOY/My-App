import Burger from "../../components/basicPage/burgerLine"
import Logo from "../../components/basicPage/logos"
import Menu from "../../components/basicPage/menu"
import GlobalStyling from "../../components/styles/global/global"
import { Outlet } from "react-router-dom"
import * as S from "../../components/styles/mainMenu/mainMenuStyles"
import SearchBar from "../../components/basicPage/searchBar"
import UserNameSideBar from "../../components/basicPage/userName"
import { useState } from "react"
import { BlockHeader } from "../../components/basicPage/BlockHeader"
import { Container } from "../../components/mainWrappers/container"
import BarContentForm from "../../components/basicPage/barContentForm"
import Footer from "../../components/mainWrappers/footer"



const Layout = () => {
    return (
    <>
    <GlobalStyling />
    <Outlet/>
    <Footer/>
    </>
    )
}

export {Layout}