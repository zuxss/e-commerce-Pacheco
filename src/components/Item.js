import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.img} alt={product.name} width={200} />
      <div>
        <h4>{product.title}</h4>
        <h5>$ {product.price}</h5>
      </div>
      <div className="item__detail">
        <Link to={`/detail/${product.id}`}>Ver detalle</Link>
      </div>
    </div>
  );
};

export default Item;
