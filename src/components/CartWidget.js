const CartWidget = ({ itemCount }) => {
  return (
    <div>
      <span className="material-icons">shopping_cart </span>
      {itemCount}
    </div>
  );
};

export default CartWidget;
