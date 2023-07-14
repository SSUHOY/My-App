import * as S from "../styles/sideBar/sideBarStyles"

const SidebarItem = ({ imgURL, altText }) => {
    return (
      <S.SideBarItem >
        <S.SideBarLink href="#">
          <S.SideBarImg src={imgURL} alt={altText} />
        </S.SideBarLink>
      </S.SideBarItem>
    )
  }
  
  export default SidebarItem
  