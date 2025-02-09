import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default App;
