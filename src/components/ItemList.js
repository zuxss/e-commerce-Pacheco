import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="section__productos">
      {productos.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
