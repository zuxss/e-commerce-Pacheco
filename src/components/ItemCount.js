import { useState } from "react";

function ItemCount() {
  let stock = 5;
  const inicial = 1;
  let [itemCount, setEstado] = useState(inicial);
  const HandleSumar = () => {
    if (itemCount >= stock) {
    } else {
      setEstado(itemCount + 1);
    }
  };

  const HandleRestar = () => {
    if (itemCount <= inicial) {
    } else {
      setEstado(itemCount - 1);
    }
  };

  const HandleAgregar = () => {
    setEstado(1);
    console.log(`Se agregaron ${itemCount} articulos`);
  };

  return (
    <div className="div__itemcount">
      <h3>Juego Pokémon</h3>
      <h4>Cantidad</h4>
      <div className="div__itemcount-botonera">
        <button className="button__restar" onClick={HandleRestar}></button>
        <p>{itemCount}</p>
        <button className="button__sumar" onClick={HandleSumar}></button>
      </div>
      <button className="button__agregar" onClick={HandleAgregar}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
