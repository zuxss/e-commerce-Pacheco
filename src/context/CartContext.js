import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cantidad) => {
    isOnCart(item.id)
      ? sumarCantidad(item, cantidad)
      : setCart([...cart, { ...item, cantidad }]);
  };

  const isOnCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const sumarCantidad = (item, cantidad) => {
    const newProducts = cart.map((item) => {
      if (item.id === item.id) {
        const newProduct = {
          ...item,
          cantidad: item.cantidad + cantidad,
        };
        return newProduct;
      } else {
        return item;
      }
    });
    setCart(newProducts);
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const calcularTotal = () => {
    let totalCarrito = 0;
    cart.forEach((item) => {
      totalCarrito += item.price * item.cantidad;
    });
    return totalCarrito;
  };

  const borrarProd = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        vaciarCarrito,
        calcularTotal,
        borrarProd,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
