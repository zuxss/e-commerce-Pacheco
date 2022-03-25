import React, { useState, useEffect } from "react";

import ItemDetail from "./ItemDetail";
import { traerProducto } from "./items";
import { useParams } from "react-router";
const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    traerProducto(id)
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      setItem({});
    };
  }, [id]);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
