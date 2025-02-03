import { useNavigate } from "react-router-dom";
// Import useCart

import { useCart } from "../../utils/CartProvider/CartProvider";

export const products = [
  {
    id: 1,
    Title: "Product 1",
    Images: "image-url",
    Price: 100,
    Ratings: 4,
    oldPrice: 120,
    discount: 10,
  },
  // Add more products here
];

const ProductCard = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use Cart Context

  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-28 mb-10">
        Our Current <span className="text-[#48B4BB]">Flash Sales</span> Items
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5 gap-2 lg:px-20 px-5 justify-center">
        {products.slice(0, 8).map((product) => (
          <div
            key={product.id}
            className="relative group border rounded-lg shadow-md p-4 bg-white overflow-hidden"
          >
            <div className="relative overflow-hidden rounded-md">
              <img
                src={product.Images}
                alt={product.Title}
                className="w-full object-cover rounded-md transition-all duration-300 group-hover:blur-sm"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="bg-[#48B4BB] text-white px-4 py-2 rounded-md transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  View Details
                </button>
                <button
                  className="bg-[#48B4BB] text-white px-4 py-2 rounded-md transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-200"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <h2 className="text-lg font-semibold mt-2">{product.Title}</h2>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < product.Ratings ? (
                    <span className="text-yellow-400">★</span>
                  ) : (
                    <span className="text-gray-300">★</span>
                  )}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xl font-bold">
                  <span className="font-bold text-2xl">৳</span>
                  {product.Price}
                </span>
                {product.oldPrice && (
                  <span className="text-gray-500 line-through ml-2">
                    <span className="font-bold text-xl">৳</span>
                    {product.oldPrice}
                  </span>
                )}
              </div>
              <div>
                {product.discount && (
                  <div className="text-[#48B4BB] text-sm rounded-md">
                    Save {product.discount}%
                  </div>
                )}
              </div>
            </div>
            <button
              className="mt-3 w-full bg-[#48B4BB] border font-bold text-white py-2 rounded-md hover:bg-white hover:text-[#48B4BB] hover:border-[#48B4BB]"
              onClick={() => addToCart(product)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/products")}
          className="bg-[#48B4BB] text-white font-bold px-6 py-2 mb-10 rounded-md hover:bg-white hover:text-[#48B4BB] border border-[#48B4BB] transition-all duration-300"
        >
          See All Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
