import React from "react";
import { db } from "./firebase";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Form() {
  const { cart, calcularTotal } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [email, setEmail] = useState("");

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleNombre = (e) => {
    setNombre(e.target.value);
    setEnviado(false);
  };

  const handleTelefono = (e) => {
    setTelefono(e.target.value);
    setEnviado(false);
  };
  const handleDireccion = (e) => {
    setDireccion(e.target.value);
    setEnviado(false);
  };
  const handleCodigoPostal = (e) => {
    setCodigoPostal(e.target.value);
    setEnviado(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEnviado(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (
      nombre === "" ||
      email === "" ||
      telefono === "" ||
      direccion === "" ||
      codigoPostal === ""
    ) {
      setError(true);
      toast.error("Por favor, debe rellenar todos los datos");
    } else {
      setEnviado(true);
      setError(false);
      terminarCompra();
    }
  };

  const terminarCompra = () => {
    const order = {
      buyer: {
        nombre: nombre,
        telefono: telefono,
        direccion: direccion,
        codigoPostal: codigoPostal,
        email: email,
      },
      items: cart,
      date: serverTimestamp(),
      total: calcularTotal(),
    };

    const ventasCollection = collection(db, "orders");
    const pedido = addDoc(ventasCollection, order);

    pedido
      .then((res) => {
        toast.success("Compra exisitosa");
      })
      .catch((error) => {
        toast.error("Ups...algo se rompió");
      });
  };

  return (
    <div>
      <form>
        <h2>Datos de Envio</h2>
        <h3>Nombre</h3>
        <input
          name="nombre"
          placeholder="Nombre"
          type="text"
          onChange={handleNombre}
          value={nombre}
        />
        <h3>Teléfono</h3>
        <input
          name="telefono"
          placeholder="Teléfono"
          type="number"
          onChange={handleTelefono}
          value={telefono}
        />
        <h3>Dirección</h3>
        <input
          name="direccion"
          placeholder="Dirección"
          type="text"
          onChange={handleDireccion}
          value={direccion}
        />
        <h3>Codigo Postal</h3>
        <input
          name="codigoPostal"
          placeholder="Codigo Postal"
          type="text"
          onChange={handleCodigoPostal}
          value={codigoPostal}
        />
        <h3>Email</h3>
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleEmail}
          value={email}
        />
        <button onClick={handleSubmit}>Comprar</button>
      </form>
    </div>
  );
}

export default Form;
