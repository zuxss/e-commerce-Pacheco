const ItemListContainer = ({ user }) => {
  return (
    <div>
      <h1> !Bienvenido {user}! </h1>
    </div>
  );
};
ItemListContainer.defaultProps = {
  user: "Usuario",
};
export default ItemListContainer;
