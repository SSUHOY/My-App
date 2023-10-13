import UserNameSideBar from "../basicPage/userName"
import SidebarBlock from "../sideBar/sideBarBlock"
import * as S from "../styles/mainMenu/mainMenuStyles"

export function MainSideBar(isPlaying) {
    return <S.MainSideBar>
    <UserNameSideBar/>
    <SidebarBlock />
    </S.MainSideBar>
}

export function SideBar() {
    return <S.MainSideBar>
    <UserNameSideBar />
    </S.MainSideBar>
}