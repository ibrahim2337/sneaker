import Banner from "../../component/Banner/Banner";
import HotDeal from "../../component/HotDeal/HotDeal";
import Shipping from "../../component/Shipping/Shipping";
import ProductCard from "../ProductCard/ProductCard";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Shipping />
      <ProductCard />
      <HotDeal />
    </div>
  );
};

export default HomePage;
