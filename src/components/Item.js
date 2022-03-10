import ItemCount from "./ItemCount";
const Item = ({ item }) => {
  return (
    <div className="div__itemcount-botonera">
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <p>{item.pictureUrl}</p>
      <ItemCount stock={5} inicial={1} />
    </div>
  );
};

export default Item;
