import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    if (!categoryId) {
      const productosCollection = collection(db, "productos");
      const pedido = getDocs(productosCollection);

      pedido
        .then((res) => setProductos(res.docs.map((doc) => doc.data())))

        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      const productosCollection = collection(db, "productos");
      const filtro = query(
        productosCollection,
        where("category", "==", categoryId)
      );
      const pedido = getDocs(filtro);

      pedido
        .then((res) => setProductos(res.docs.map((doc) => doc.data())))

        .catch((error) => {
          console.error(error);
        })
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

  if (loading) {
    return (
      <div className="item__detail">
        <h1>Cargando...</h1>
      </div>
    );
  } else {
    if ((categoryId !== "products") & (categoryId !== undefined)) {
      let productosFiltrados = items.filter(function (obj) {
        return obj.category === `${categoryId}`;
      });
      return <ItemList products={productosFiltrados} />;
    } else {
      return <ItemList products={items} />;
    }
  }
};

export default ItemListContainer;
