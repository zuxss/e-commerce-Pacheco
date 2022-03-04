const CartWidget = ({ itemCount }) => {
  return (
    <div>
      <span class="material-icons">shopping_cart </span>
      {itemCount}
    </div>
  );
};

export default CartWidget;
