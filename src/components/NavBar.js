import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import React from "react";
const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBar__title">
        <NavLink to="/">
          <img
            id="logo"
            src="https://www.narita-airport.jp/img/original/3786"
          ></img>
        </NavLink>
      </div>
      <div className="navBar__items">
        <li>
          <CartWidget />
        </li>
        <div className="navBar__links">
          <li>
            <NavLink to="/category/productos">Catálogo de productos</NavLink>
          </li>
          <li>
            <NavLink to="/category/GameBoy">GameBoy</NavLink>
          </li>
          <li>
            <NavLink to="/category/GameBoy Color">Gameboy Color</NavLink>
          </li>
          <li>
            <NavLink to="/category/GameBoy Advance">GameBoy Advance</NavLink>
          </li>
          <li>
            <NavLink to="/category/Nintendo DS">DS</NavLink>
          </li>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
