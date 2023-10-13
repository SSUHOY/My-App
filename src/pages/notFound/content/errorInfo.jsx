import { NavLink } from 'react-router-dom'
import { Styled404Block, StyledBtnToMain, StyledCenterBlock, StyledErrorDiscription, StyledErrorHeader } from '../404.styled'
import ErrorImgUrl from './svg/404.svg'

export const ErrorInfo = () => {
    return  (
<>
  <StyledCenterBlock>
    <Styled404Block>
      <img src={ErrorImgUrl} alt="404" />
      <StyledErrorHeader>Страница не найдена &#128546;</StyledErrorHeader>
      <StyledErrorDiscription>
        Возможно, она была удалена <br />
        или перенесена на другой адрес
      </StyledErrorDiscription>
      <NavLink to="/">
        <StyledBtnToMain>Вернуться на главную</StyledBtnToMain>
      </NavLink>
    </Styled404Block>
  </StyledCenterBlock>
</>

    )    
}

