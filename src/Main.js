import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/inicio/:idCategoria" element={<ItemListContainer />} />
        <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
      </Routes>
    </main>
  );
};

export default Main;
