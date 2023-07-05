const SidebarItem = ({ imgURL, altText }) => {
    return (
      <div className="sidebar__item">
        <a className="sidebar__link" href="#">
          <img className="sidebar__img" src={imgURL} alt={altText} />
        </a>
      </div>
    )
  }
  
  export default SidebarItem
  