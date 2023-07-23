import React from "react"
import * as S from "../styles/basicPage/basicPageStyles"
import { NavLink } from "react-router-dom"
import cn from 'classnames'

const Menu = ({handleLogoutClick, activeLinkClass, isAuthenticated}) => {
 
    return (
      <React.Fragment>
        <S.MenuList>
          <S.MenuItem>
          <NavLink to='/' className="menu__link-burger">
              Главное
            </NavLink>
          </S.MenuItem>
          <S.MenuItem >
            <NavLink to='/favorites' className="menu__link-burger">
              Мой плейлист
            </NavLink>
          </S.MenuItem>
          <S.MenuItem>
          <NavLink
          onClick={handleLogoutClick}
            to="/login"
            isAuten
            className={({ isActive }) =>
              cn('menu__link-burger', { [activeLinkClass]: isActive})
            }>
              Выйти
            </NavLink>
          </S.MenuItem>
        </S.MenuList>
        </React.Fragment>
    )
  }
  
  export default Menu
  