import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { db } from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "productos");
    const filtro = query(productosCollection, where("id", "==", Number(id)));
    const pedido = getDocs(filtro);

    pedido
      .then((res) => setItem(res.docs[0].data()))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="item__detail">
        <h1>Cargando...</h1>
      </div>
    );
  } else {
    return (
      <div className="item__detail">
        <ItemDetail item={item} />
      </div>
    );
  }
};

export default ItemDetailContainer;
