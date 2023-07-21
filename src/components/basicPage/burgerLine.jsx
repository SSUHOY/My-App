import React from "react"
import { BurgerLine } from "../styles/basicPage/basicPageStyles"



const Burger = () => {

    return (
      <React.Fragment>
        <BurgerLine className="burger__line" />
        <BurgerLine className="burger__line" />
        <BurgerLine className="burger__line" />
      </React.Fragment>
    )
  }
  
  export default Burger
  