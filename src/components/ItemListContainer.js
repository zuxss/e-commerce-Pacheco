import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { traerProductos } from "./items";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    traerProductos(categoryId)
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setItems([]);
    };
  }, [categoryId]);

  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    if ((categoryId != "products") & (categoryId != undefined)) {
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
