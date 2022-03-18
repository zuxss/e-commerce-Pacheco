import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);
  let navigate = useNavigate();

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    setTimeout(() => {
      navigate("/cart");
    }, 3000);
  };

  return (
    <div>
      <img src={item.img} alt={item.name} width={200} />
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <h3>$ {item.price}</h3>
        <ItemCount stock={item.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
