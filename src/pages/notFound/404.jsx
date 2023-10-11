import { Nav } from "../../components/mainWrappers/nav"
import * as S from "../../components/styles/mainMenu/mainMenuStyles"
import { StyledHeader } from "../../components/styles/basicPage/blockHeaderStyle";
import { Styled404Block, Styled404Header, Styled404svg, StyledCenterBlock } from "./404.styled";
import { SideBar } from "../../components/mainWrappers/sidebar";
import { DiscriptionError, ErrorInfo, HeaderError } from "./content/errorInfo.jsx";
import SearchBar from "../../components/basicPage/search/searchBar";



export const NotFound = () => {

return (
<>
  <S.Main>
    <Nav />
    <S.MainCenterBlock>
      <SearchBar />
      <ErrorInfo />
    </S.MainCenterBlock>
    <SideBar />
  </S.Main>
</>
  
)
};