import Header from "./Header";
import Footer from "./components/Footer";
import Main from "./Main";
import { CartContextProvider } from "./context/CartContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
