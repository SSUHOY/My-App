import styled from "styled-components"


export const Main = styled.main`
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
    flex: 1 1 auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
    justify-content: space-between;
`

export const MainNav = styled.nav`
width: 244px;
height: 189px;
background-color: #181818;
padding: 20px 0 20px 36px
`

export const NavBurger = styled.div`
width: 20px;
height: 36px;
padding: 13px 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
-webkit-box-pack: justify;
    -ms-flex-pack: justify;
        justify-content: space-between;
        cursor: pointer;
`


export const MainCenterBlock = styled.div`
width: auto;
  -webkit-box-flex: 3;
      -ms-flex-positive: 3;
          flex-grow: 3;
  padding: 20px 40px 20px 111px;
`

export const CenterBlockContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
`

export const MainSideBar = styled.div`
max-width: 418px;
padding: 20px 90px 20px 78px;
`

export const NavMenu = styled.div`
display: block;
visibility: visible;
transform: translateX(-1500%);
transition: all 0.2s

  // Затем мы можем использовать проп props.active для добавления дополнительных стилей
  ${props => props.active && `transform: translateX(0)
  `}
`;