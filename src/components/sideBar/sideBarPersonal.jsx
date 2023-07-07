const SidebarPersonal = ({ userName, avatarImg }) => {
    return (
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">{userName}</p>
        <div className="sidebar__avatar">{avatarImg}</div>
      </div>
    )
  }
  export default SidebarPersonal
  