import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);
  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    addToCart(item, cantidad);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "40px",
      }}
    >
      <img src={item.img} alt={item.name} width={200} />
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <h3>$ {item.price}</h3>
        {cantidad === 0 ? (
          <ItemCount stock={item.stock} onAdd={onAdd} />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/carrito">
              <button className="button__agregar">Finalizar Compra</button>
            </Link>
            <Link to="/category/productos">
              {" "}
              <button className="button__agregar">Continuar Comprando</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
