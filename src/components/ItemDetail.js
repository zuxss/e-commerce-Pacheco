import ItemCount from "./ItemCount";
const ItemDetail = ({ item }) => {
  const onAdd = (cantidadSeleccionada) => {
    console.log("Añadir al carrito", cantidadSeleccionada);
  };

  return (
    <div>
      <img src={item.image} alt="" />
      <div>
        <h3>{item.title}</h3>
        <p>{item.price}</p>
      </div>
      <p>{item.description}</p>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
