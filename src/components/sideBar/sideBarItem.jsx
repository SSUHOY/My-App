import { Link } from "react-router-dom"
import * as S from "../styles/sideBar/sideBarStyles"
import { setPlaylist } from "../../store/actions/creators/tracks"

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
  