import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
