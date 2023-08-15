import { Link } from "react-router-dom"
import * as S from "../styles/sideBar/sideBarStyles"

const SidebarItem = ({ imgURL, altText, id }) => {
    return (
      <S.SideBarItem >
    <Link to={`/category/${id}`} className="sidebar__link" href="#">
          <S.SideBarImg src={imgURL} alt={altText} />
        </Link>
      </S.SideBarItem>
    )
  }
  
  export default SidebarItem
  