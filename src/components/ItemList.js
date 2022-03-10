import Item from "./Item";

const ItemList = ({ item }) => {
  return (
    <div>
      {" "}
      {item.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
export default ItemList;
