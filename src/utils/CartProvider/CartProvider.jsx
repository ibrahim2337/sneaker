import { useState } from "react";

const products = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Jeans", price: 40 },
  { id: 3, name: "Sneakers", price: 60 },
];

const CartProvider = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-lg flex justify-between items-center"
          >
            <span>
              {product.name} - ${product.price}
            </span>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-6">Cart</h2>
      {cart.length > 0 ? (
        <div className="mt-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="p-4 border rounded-lg flex justify-between items-center"
            >
              <span>
                {item.name} - ${item.price} x {item.quantity}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="bg-gray-300 px-2 rounded"
                >
                  -
                </button>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="bg-gray-300 px-2 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3 className="text-lg font-semibold mt-4">Total: ${totalPrice}</h3>
        </div>
      ) : (
        <p className="mt-4">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartProvider;
