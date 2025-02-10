import Banner from "../../component/Banner/Banner";
import Shipping from "../../component/Shipping/Shipping";
import ShoeInformation from "../../component/ShoeInformation/ShoeInformation";
import ProductCard from "../ProductCard/ProductCard";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Shipping />
      <ProductCard />

      <ShoeInformation />
    </div>
  );
};

export default HomePage;
