import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div
      style={{
        margin: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "5px",
      }}
    >
      <img src={product.img} alt={product.name} width={200} />
      <div>
        <h4>{product.title}</h4>
        <h4>$ {product.price}</h4>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Link to={`/detail/${product.id}`}>Ver detalle</Link>
      </div>
    </div>
  );
};

export default Item;
