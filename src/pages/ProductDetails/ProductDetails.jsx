import { useLocation, useParams } from "react-router-dom";
import { products } from "../../../public/ProductData/ProductData";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const location = useLocation();

  // Try to get product from state OR find it by ID
  const product = location.state?.product || products.find((p) => p._id === id);

  if (!product) {
    return <div className="text-center text-red-500">Product not found.</div>;
  }
  return (
    <div className="flex border rounded-lg shadow-md overflow-hidden bg-white w-72">
      <img
        src={product.Images[0]}
        alt={product.Title}
        className="w-full h-auto object-cover"
      />
      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-xl font-bold">{product.Title}</h2>
        <p className="text-sm text-gray-500">Category: {product.Category}</p>
        <div className="mt-2">
          <span className="line-through text-gray-500">
            ₹{product.oldPrice}
          </span>
          <span className="text-xl text-red-600 font-semibold">
            {" "}
            ₹{product.Price}
          </span>
          <span className="text-green-500 font-semibold">
            {" "}
            {product.discount}% OFF
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-700">{product.Description}</p>
        <p className="mt-1 text-sm text-gray-700">Brand: {product.Brand}</p>
        <div className="flex items-center mt-2">
          <span className="text-orange-500 font-semibold">
            {product.Ratings}
          </span>
          <span className="ml-1 text-sm">/ 5</span>
        </div>
        {product.Flashsale === "true" && (
          <div className="bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-md mt-2 inline-block">
            Flash Sale!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
