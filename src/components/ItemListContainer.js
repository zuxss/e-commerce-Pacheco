import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { toast } from "react-toastify";

const Productos = [
  {
    id: 1,
    title: "Pokémon Rojo",
    price: 100,
    description: "Gameboy",
  },
  {
    id: 2,
    title: "Pokémon Azúl",
    price: 100,
    description: "Gameboy",
  },
  {
    id: 3,
    title: "Pokémon Plata",
    price: 100,
    description: "Gameboy",
  },
];
const ItemListContainer = () => {
  const [item, setData] = useState([]);
  const [loading, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    toast("Cargando Productos...");
    setTimeout(() => {
      setData(Productos);
      setIsLoaded(true);
      toast.dismiss();
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? <ItemList item={item} /> : <div>Cargando Productos...</div>}
    </div>
  );
};

export default ItemListContainer;
