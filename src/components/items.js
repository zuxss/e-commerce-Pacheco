const products = [
  {
    id: 1,
    title: "Pokemon Rojo",
    price: 200,
    description: "Videojuego",
    category: "Game",
    img: "https://static.wikia.nocookie.net/espokemon/images/d/db/Car%C3%A1tula_de_Pok%C3%A9mon_Rojo.jpg",
  },
  {
    id: 2,
    title: "Pokemon Azul",
    price: 200,
    description: "Videojuego",
    category: "Game",
    img: "https://static.wikia.nocookie.net/espokemon/images/9/9d/Car%C3%A1tula_de_Pok%C3%A9mon_Azul.jpg",
  },
  {
    id: 3,
    title: "Pokemon Amarillo",
    price: 200,
    description: "Videojuego",
    category: "Game",
    img: "https://static.wikia.nocookie.net/espokemon/images/9/95/Pok%C3%A9mon_Amarillo.png",
  },
  {
    id: 4,
    title: "Pokemon Oro",
    price: 200,
    description: "Videojuego",
    category: "Game",
    img: "https://static.wikia.nocookie.net/espokemon/images/6/6b/Pokemon_Edici%C3%B3n_Oro.jpg",
  },
  {
    id: 5,
    title: "Pokemon Rojo",
    price: 200,
    description: "Videojuego",
    category: "GameBoy",
    img: "https://static.wikia.nocookie.net/espokemon/images/d/db/Car%C3%A1tula_de_Pok%C3%A9mon_Rojo.jpg",
  },
  {
    id: 6,
    title: "Pokemon Azul",
    price: 200,
    description: "Videojuego",
    category: "GameBoy",
    img: "https://static.wikia.nocookie.net/espokemon/images/9/9d/Car%C3%A1tula_de_Pok%C3%A9mon_Azul.jpg",
  },
  {
    id: 7,
    title: "Pokemon Amarillo",
    price: 200,
    description: "Videojuego",
    category: "GameBoy",
    img: "https://static.wikia.nocookie.net/espokemon/images/9/95/Pok%C3%A9mon_Amarillo.png",
  },
];

export const traerProductos = (id) => {
  return new Promise((resolve, reject) => {
    const itemFiltrados = products.filter((prod) => prod.category === id);
    setTimeout(() => {
      id ? resolve(itemFiltrados) : resolve(products);
    }, 1000);
  });
};

export const traerProducto = (id) => {
  return new Promise((resolve, reject) => {
    const item = products.find((prod) => prod.id === parseInt(id));
    setTimeout(() => {
      resolve(item);
    }, 1000);
  });
};
