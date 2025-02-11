import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const products = [
  {
    id: "PEP-19115",
    name: "Blouse Ruffle Tube top",
    category: "Fashion",
    stock: true,
    price: 14.99,
    qty: 154,
    revenue: 15236,
    status: "Published",
  },
  {
    id: "PEP-19116",
    name: "Gold-colored locket watch",
    category: "Watch",
    stock: true,
    price: 59.99,
    qty: 187,
    revenue: 18956,
    status: "Published",
  },
  {
    id: "PEP-19117",
    name: "Spar Men Black Running Shoes",
    category: "Footwear",
    stock: false,
    price: 35.78,
    qty: 487,
    revenue: 0,
    status: "Inactive",
  },
  {
    id: "PEP-19118",
    name: "Crop top Sweater Clothing",
    category: "Fashion",
    stock: false,
    price: 29.49,
    qty: 177,
    revenue: 4265,
    status: "Inactive",
  },
];

const handleEdit = (id) => {
  console.log("Edit product with ID:", id);
};

const handleDelete = (id) => {
  console.log("Delete product with ID:", id);
};

const ProductList = () => {
  return (
    <div>
      <div className="p-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Product List</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            + Add Product
          </button>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Product ID</th>
              <th className="border p-2">Product</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Stock</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">QTY</th>
              <th className="border p-2">Revenue</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border">
                <td className="border p-2">{product.id}</td>
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">{product.category}</td>
                <td className="border p-2 text-center">
                  <input type="checkbox" checked={product.stock} readOnly />
                </td>
                <td className="border p-2">${product.price.toFixed(2)}</td>
                <td className="border p-2">{product.qty}</td>
                <td className="border p-2">
                  ${product.revenue.toLocaleString()}
                </td>
                <td className="border p-2">
                  <span
                    className={`px-2 py-1 rounded ${
                      product.status === "Published"
                        ? "bg-green-200 text-green-800"
                        : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="border p-2 flex gap-2 justify-center">
                  <button onClick={() => handleEdit(product.id)} className="">
                    <FiEdit className="h-4 w-4" />
                  </button>
                  <button onClick={() => handleDelete(product.id)}>
                    <MdOutlineDeleteOutline className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
