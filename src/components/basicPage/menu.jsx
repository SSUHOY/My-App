import React from "react"
import * as S from "../styles/basicPage/basicPageStyles"
import { NavLink } from "react-router-dom"
import cn from 'classnames'
import { useAuthContext } from "../../context/AuthContext"

const Menu = ({ activeLinkClass, isAuthenticated}) => {
  const { logoutUserFn } = useAuthContext()
  const handleLogoutClick = () => {
    logoutUserFn()
  }


    return (
      <React.Fragment>
        <S.MenuList>
          <S.MenuItem>
          <NavLink to='/' className="menu__link-burger">
              Главная
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
  