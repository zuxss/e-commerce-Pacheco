import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBar__title">
        <ul> Tienda Pokémon </ul>
      </div>
      <div className="navBar__items">
        <li>
          <CartWidget itemCount="0" />
        </li>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Catálogo de productos</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </div>
    </nav>
  );
};
export default NavBar;
