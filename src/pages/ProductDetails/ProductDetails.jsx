import { div } from "motion/react-client";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const ProductDetails = () => {
  const product = {
    id: "673c9c45890938a7822ea088",
    title: "Air Jordan XI Retro",
    category: "Fashion Manufacturer",
    discount: "40",
    price: 2657.4,
    old_price: 4429,
    images: [
      "https://demo.posthemes.com/pos_sneaker/137-large_default/nike-air-max-thea.jpg",
    ],
    description:
      "The Air Jordan XI Retro reflects the brand’s decade-long expertise in the fashion industry, showcasing a deep understanding of design trends and customer preferences. Known for its focus on quality and style, the sneaker combines aesthetics with functionality, ensuring both durability and appeal. As part of a well-crafted collection, it highlights the brand’s reputation for consistency and high-quality craftsmanship. Designed with attention to detail, it aligns with the brand’s overall aesthetic standards. Its timeless appeal blends classic and contemporary styles, making it a versatile choice. This retro sneaker is a testament to the brand’s commitment to excellence since 2010.",
    brand: "Beurer",
    ratings: "4.5",
  };

  return (
    <div>
      <section className="bg-gray-50 min-h-screen py-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Images */}
            <div>
              <div className="relative group">
                {/* Main Product Image */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                </div>
                {/* Zoom Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition">
                  <button
                    className="bg-white p-4 rounded-full shadow-lg flex items-center space-x-2"
                    onClick={() => alert("Zoom feature coming soon!")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 11l-3.5-3.5m0 0L7 7m3.5 3.5L21 21M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
                      />
                    </svg>
                    <span className="text-gray-800 font-semibold">Zoom</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div>
              <Link
                to="/"
                className="text-gray-500 mb-4 flex items-center space-x-2 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>Back</span>
              </Link>
              <h1 className="text-3xl font-bold text-gray-800">
                {product.title}
              </h1>
              <p className="text-gray-500 mt-2">{product.category}</p>
              <p className="text-gray-700 mt-4">{product.description}</p>

              {/* Pricing */}
              <div className="flex items-center space-x-4 mt-6">
                <p className="text-2xl font-bold text-gray-800">
                  ${product.price}
                </p>
                <p className="text-gray-500 line-through">
                  ${product.old_price}
                </p>
                <p className="text-green-600 font-semibold">
                  Save {product.discount}%
                </p>
              </div>

              {/* Ratings */}
              <div className="flex items-center mt-4">
                <span className="text-yellow-400 flex space-x-1">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < Math.floor(product.ratings) ? (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.453 8.332 1.151-6.064 5.945 1.478 8.317L12 18.897 4.586 23.453l1.478-8.317L0 9.191l8.332-1.151z" />
                      </svg>
                    ) : (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.453 8.332 1.151-6.064 5.945 1.478 8.317L12 18.897 4.586 23.453l1.478-8.317L0 9.191l8.332-1.151z" />
                      </svg>
                    )
                  )}
                </span>
                <p className="text-gray-500 ml-2">{product.ratings}/5</p>
              </div>
              {/* Size Options */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">Size</h3>
                <div className="flex space-x-4 mt-2">
                  {[37, 38, 39, 40, 41].map((size) => (
                    <button
                      key={size}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-gray-800 focus:ring focus:ring-gray-400"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">Colour</h3>
                <div className="flex space-x-4 mt-2">
                  <div className="w-8 h-8 rounded-full bg-black border-2 border-gray-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-500 border border-gray-300"></div>
                  <div className="w-8 h-8 rounded-full bg-orange-500 border border-gray-300"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 border border-gray-300"></div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 mt-8">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <ProductCard></ProductCard>
    </div>
  );
};

export default ProductDetails;
