import { useState } from "react"
import Burger from "../basicPage/burgerLine"
import Logo from "../basicPage/icons/icons"
import Menu from "../basicPage/menu"
import * as S from "../styles/mainMenu/mainMenuStyles"


export function Nav() {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <S.MainNav>
          <Logo />
          <S.NavBurger onClick={() => setMenuActive(!menuActive)}>
            <Burger />
          </S.NavBurger>
          <S.NavMenu active={menuActive}>
            <Menu active={menuActive} setActive={setMenuActive} />
          </S.NavMenu>
        </S.MainNav>
      );
}