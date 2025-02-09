import { useParams } from "react-router-dom";
import { products } from "../../../public/ProductData/ProductData";

const ProductDetails = () => {
  const { id } = useParams(); // Get Product ID from URL

  // Find the selected product
  const product = products.find((item) => item.id === parseInt(id));

  // If no product found, show error
  if (!product) {
    return <div className="text-center text-red-600">Product Not Found</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl p-6 shadow-lg rounded-2xl bg-white flex flex-col md:flex-row">
        <div className="flex flex-col items-center md:w-1/2">
          <img
            src={product.images}
            alt={product.title}
            className="w-full h-80 object-cover rounded-lg"
          />
          <div className="flex space-x-2 mt-4">
            {product.Thumbnail.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Thumbnail"
                className="w-16 h-16 object-cover rounded-lg cursor-pointer border hover:border-gray-500"
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
          <p className="text-xl font-semibold text-gray-900 mb-1">
            ৳{product.price}
          </p>
          <p className="text-gray-400 text-sm line-through">
            ৳{product.old_price}
          </p>
          <p className="text-red-600 text-sm font-bold">
            Save {product.discount}%
          </p>
          <p className="text-yellow-500 text-sm mb-4">
            Ratings: {product.ratings} ⭐
          </p>
          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
