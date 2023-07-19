// import './App.css';
import { NavLink } from "react-router-dom";

import './index.css';

export const NavBar = () => {
  return (
    <nav>
      <ul className="NavBar__list">
        <li>
          <NavLink className="App-link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="App-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}