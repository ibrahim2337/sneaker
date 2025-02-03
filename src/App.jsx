import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import { CartProvider } from "./utils/CartProvider/CartProvider";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <CartProvider>
        <CartPage />
      </CartProvider>
    </div>
  );
}

export default App;
