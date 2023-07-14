import * as S from "../styles/basicPage/basicPageStyles"

const UserNameSideBar = ({ userName, avatarImg }) => {
    return (
        <S.UserNameSideBar>
          <S.SideBarPersonalName>{userName}</S.SideBarPersonalName>
          <S.SideBarPersonalName>{avatarImg}</S.SideBarPersonalName>
        </S.UserNameSideBar>
      )
    }
    export default UserNameSideBar
    