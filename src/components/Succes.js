import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div className="compra__exitosa">
      <h1>¡Compra realizada con exito!</h1>
      <img
        alt="compra exitosa"
        id="compra__exitosa__img"
        src="https://i.pinimg.com/736x/27/ee/88/27ee887088bd8a605f2fbea36fd9b3b3.jpg"
      ></img>
      <Link to="/">
        <button className="compra__exitosa__btnVolver">Volver al Inicio</button>
      </Link>
    </div>
  );
};
export default Success;
