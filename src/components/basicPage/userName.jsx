import { NavLink } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContext"
import * as S from "../styles/basicPage/basicPageStyles"
import { LogOutLogo } from "./icons"

const UserNameSideBar = () => {
  const { user } = useAuthContext()
    return (
        <S.UserNameSideBar>
        <S.SideBarPersonalName>{user?.username}</S.SideBarPersonalName>
        <NavLink to='/login'>
        <LogOutLogo/>
        </NavLink>
        </S.UserNameSideBar>
      )
    }
    export default UserNameSideBar
    