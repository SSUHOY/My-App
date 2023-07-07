import SidebarItem from './sideBarItem'

const SidebarBlock = () => {
  return (
    <div className="sidebar__block">
      <div className="sidebar__list">
        <SidebarItem imgURL="img/playlist01.png" altText="day's playlist" />
        <SidebarItem imgURL="img/playlist02.png" altText="day's playlist" />
        <SidebarItem imgURL="img/playlist03.png" altText="day's playlist" />
      </div>
    </div>
  )
}

export default SidebarBlock
