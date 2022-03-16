import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    toast.info("Cargando productos...");

    fetch("./item.json")
      .then((response) => response.json())
      .then((resultado) => {
        setItem(resultado);
      })
      .catch(() => {
        toast.error("Error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idCategoria]);

  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    return <ItemList productos={item} />;
  }
};

export default ItemListContainer;
