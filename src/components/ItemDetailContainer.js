import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { idItem } = useParams();

  useEffect(() => {
    fetch(`./item.json${idItem}`)
      .then((response) => {
        return response.json();
      })
      .then((respuesta) => {
        setItem(respuesta);
      })
      .catch(() => {
        toast.error("Error al cargar el producto");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    return <ItemDetail item={item} />;
  }
};
export default ItemDetailContainer;
