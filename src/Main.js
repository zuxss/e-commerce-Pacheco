import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";
import Form from "./components/Form";
import Success from "./components/Succes";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/category/productos" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </main>
  );
};

export default Main;
