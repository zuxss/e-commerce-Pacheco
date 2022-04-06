import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { cart, calcularTotal, vaciarCarrito, cantidadProductos, borrarProd } =
    useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/">Inicio</Link>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
          }}
        >
          {cart.map((product) => (
            <div
              style={{
                margin: "10px",
                border: "1px solid black",
                borderRadius: "5px",
                padding: "5px",
              }}
              key={product.id}
            >
              <img src={product.img} alt={product.title} width="150px" />
              <div style={{ marginRight: "20px" }}>
                <h3>Nombre: {product.title}</h3>
                <h4>Cantidad: {product.cantidad}</h4>
                <h4>Precio unitario: $ {product.price}</h4>
                <h4>Subtotal: $ {product.price * product.cantidad}</h4>
                <button onClick={() => borrarProd(product.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <h2>Cantidad de productos:{cantidadProductos()}</h2>
          <h2>Total: ${calcularTotal()}</h2>
        </div>
      )}
      <div
        style={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        <Link to="/checkout">Finalizar compra</Link>
      </div>
    </>
  );
};

export default Carrito;
