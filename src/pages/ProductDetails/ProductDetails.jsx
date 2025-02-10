import { useState } from "react";
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
      "https://demo.posthemes.com/pos_sneaker/138-large_default/nike-air-max-90.jpg",
      "https://demo.posthemes.com/pos_sneaker/139-large_default/nike-air-force.jpg",
      "https://demo.posthemes.com/pos_sneaker/140-large_default/nike-roshe-run.jpg",
    ],
    description:
      "The Air Jordan XI Retro reflects the brand’s decade-long expertise in the fashion industry, showcasing a deep understanding of design trends and customer preferences. Known for its focus on quality and style, the sneaker combines aesthetics with functionality, ensuring both durability and appeal. As part of a well-crafted collection, it highlights the brand’s reputation for consistency and high-quality craftsmanship. Designed with attention to detail, it aligns with the brand’s overall aesthetic standards. Its timeless appeal blends classic and contemporary styles, making it a versatile choice. This retro sneaker is a testament to the brand’s commitment to excellence since 2010.",
    brand: "Beurer",
    ratings: "4.5",
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

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
                    src={mainImage}
                    alt={product.title}
                    className="w-full h-auto lg:h-[500px] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                </div>
              </div>
              {/* Thumbnail Images */}
              <div className="flex space-x-4 mt-4 overflow-x-auto">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-16 h-16 md:w-24 md:h-24 lg:w-40 lg:h-40 rounded-lg cursor-pointer border-2 border-transparent hover:border-gray-800 transition-all"
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Details */}
            <div>
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
              <button className=" px-6  py-2 mt-5 bg-[#48B4BB] border font-bold text-white rounded-md hover:bg-white hover:text-[#48B4BB] hover:border-[#48B4BB]">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <ProductCard />
    </div>
  );
};

export default ProductDetails;
