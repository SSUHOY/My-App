import SidebarItem from './sideBarItem'
import * as S from '../styles/sideBar/sideBarStyles'

const SidebarBlock = ({isLoading}) => {
  return (
    <S.SideBarBlock >
      <S.SideBarList className="sidebar__list">
        <SidebarItem imgURL="img/playlist01.png" altText="day's playlist" id="1" isLoading={isLoading}/>
        <SidebarItem imgURL="img/playlist02.png" altText='100 dance hits' id="2" isLoading={isLoading}/>
        <SidebarItem imgURL="img/playlist03.png" altText='Indie charge'   id="3" isLoading={isLoading}/>
      </S.SideBarList >
    </S.SideBarBlock>
  )
}

export default SidebarBlock
