import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBar__title">
        <NavLink to="/">Tienda Pokémon</NavLink>
      </div>
      <div className="navBar__items">
        <li>
          <CartWidget />
        </li>

        <li>
          <NavLink to="/category/productos">Catálogo de productos</NavLink>
        </li>
        <li>
          <NavLink to="/category/GameBoy">GameBoy</NavLink>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </div>
    </nav>
  );
};
export default NavBar;
