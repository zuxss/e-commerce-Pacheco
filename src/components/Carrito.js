import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { cart, calcularTotal, vaciarCarrito, cantidadProductos, borrarProd } =
    useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <div className="carrito__vacio">
          <h1> No hay items en el carrito</h1>
          <h3>¡Vamos a comprar algo!</h3>
          <Link to="/">
            <button className="carrito__btn__inicio">Productos</button>
          </Link>
        </div>
      ) : (
        <div className="carrito__container">
          {cart.map((product) => (
            <div className="carrito__item" key={product.id}>
              <img src={product.img} alt={product.title} width="150px" />
              <div className="carrito__item__text">
                <h3>{product.title}</h3>
                <h4>Cantidad: {product.cantidad}</h4>
                <h4>Precio unitario: $ {product.price}</h4>
                <h4>Subtotal: $ {product.price * product.cantidad}</h4>
                <button
                  onClick={() => borrarProd(product.id)}
                  className="carrito__item__delete"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <div>
            <h2>Cantidad de productos:{cantidadProductos()}</h2>
            <h2>Total: ${calcularTotal()}</h2>
            <div>
              {" "}
              <button className="button__agregar" onClick={vaciarCarrito}>
                Vaciar carrito
              </button>
              <Link to="/checkout">
                <button className="button__agregar">Finalizar Compra</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carrito;
