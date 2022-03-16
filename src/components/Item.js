import { Link } from "react-router-dom";
import ItemDetailContainer from "./Item";
const Item = ({ item }) => {
  return (
    <div className="producto">
      <img src={item.image} />
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <p>${item.price}</p>

      <Link
        className="linkitem"
        to={`/producto/${item.id}`}
        element={<ItemDetailContainer />}
      >
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
