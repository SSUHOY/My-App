import { useAuthContext } from "../../context/AuthContext"
import * as S from "../styles/basicPage/basicPageStyles"

const UserNameSideBar = ({ avatarImg }) => {
  const { user } = useAuthContext()
    return (
        <S.UserNameSideBar>
          <S.SideBarPersonalName>{user.username}</S.SideBarPersonalName>
          <S.SideBarPersonalName>{avatarImg}</S.SideBarPersonalName>
        </S.UserNameSideBar>
      )
    }
    export default UserNameSideBar
    