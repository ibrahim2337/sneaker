import { useState } from "react";
import backgroundImage from "../../assets/background.avif";
import birdImage from "../../assets/banner/1.png";

const ProductCard = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-80 h-96 cursor-pointer overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${
          hover ? "translate-y-[-12px] rotate-x-2 perspective-20" : ""
        }`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Bird */}
      <div
        className={`absolute w-80 h-80 bg-contain bg-no-repeat transition-transform duration-500 ${
          hover ? "translate-y-[-40px] translate-x-[-5px] animate-bird" : ""
        }`}
        style={{ backgroundImage: `url(${birdImage})` }}
      ></div>
    </div>
  );
};

export default ProductCard;
