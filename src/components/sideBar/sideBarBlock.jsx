import SidebarItem from './sideBarItem'

import * as S from '../styles/sideBar/sideBarStyles'

const SidebarBlock = () => {
  return (
    <S.SideBarBlock >
      <S.SideBarList className="sidebar__list">
        <SidebarItem imgURL="img/playlist01.png" altText="day's playlist" />
        <SidebarItem imgURL="img/playlist02.png" altText="day's playlist" />
        <SidebarItem imgURL="img/playlist03.png" altText="day's playlist" />
      </S.SideBarList >
    </S.SideBarBlock>
  )
}

export default SidebarBlock
