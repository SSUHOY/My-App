import React from "react"
import * as S from "../styles/basicPage/basicPageStyles"

const Menu = () => {
 
    return (
      <React.Fragment>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuLink href="http://">
              Главное
            </S.MenuLink>
          </S.MenuItem>
          <S.MenuItem >
            <S.MenuLink href="http://">
              Мой плейлист
            </S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="http://">
              Войти
            </S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
        </React.Fragment>
    )
  }
  
  export default Menu
  