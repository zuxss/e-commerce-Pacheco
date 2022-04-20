import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";
const CartWidget = () => {
  const { cantidadProductos } = useContext(CartContext);
  return (
    <NavLink to="/cart">
      <div className="icon">
        <span className="material-icons">shopping_cart</span>
        <p>{cantidadProductos()}</p>
      </div>
    </NavLink>
  );
};

export default CartWidget;
