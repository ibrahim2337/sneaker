import { useState } from "react";

const productsData = [
  { id: 1, name: "Laptop", price: "$1000", stock: 10 },
  { id: 2, name: "Phone", price: "$500", stock: 20 },
  { id: 3, name: "Headphones", price: "$100", stock: 30 },
];

const AdminPanel = () => {
  const [products, setProducts] = useState(productsData);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Products
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Orders
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-5">
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="text-center">
                <td className="border border-gray-300 p-2">{product.id}</td>
                <td className="border border-gray-300 p-2">{product.name}</td>
                <td className="border border-gray-300 p-2">{product.price}</td>
                <td className="border border-gray-300 p-2">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
