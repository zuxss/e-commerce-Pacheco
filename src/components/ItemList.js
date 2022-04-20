import Item from "./Item";
import React from "react";

const ItemList = ({ products }) => {
  return (
    <div className="items">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
