import { useState } from "react";

const CartModel = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Converse Chuck Taylor", price: 44.0, quantity: 2 },
    { id: 2, name: "Glocker White", price: 249.99, quantity: 1 },
    { id: 3, name: "F1'19.99", price: 119.99, quantity: 1 },
  ]);

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Function to increment the quantity of an item
  const incrementQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrement the quantity of an item
  const decrementQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate total cost
  const totalCost =
    cart.reduce((total, item) => total + item.price * item.quantity, 0) + 5.0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-20 py-6">
      {/* Shopping Cart Section */}
      <div className="col-span-1 md:col-span-2">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">{cart.length} Items</h2>
          <div className="grid grid-cols-4 gap-4 font-bold border-b pb-2">
            <div className="col-span-2 md:col-span-1">PRODUCT DETAILS</div>
            <div className="hidden md:block">QUANTITY</div>
            <div className="hidden md:block">PRICE</div>
            <div className="hidden md:block">TOTAL</div>
          </div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center border-b py-2"
            >
              <div className="text-xs col-span-2 md:col-span-1">
                {item.name}
              </div>
              <div className="flex items-center col-span-2 md:col-span-1">
                <button
                  onClick={() => decrementQuantity(item.id)}
                  className="bg-gray-200 px-2 py-1 text-xs rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="bg-gray-200 px-2 py-1 text-xs rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <div className="hidden md:block text-xs">
                £{item.price.toFixed(2)}
              </div>
              <div className="hidden md:block text-xs">
                £{(item.price * item.quantity).toFixed(2)}
              </div>
              <div className="col-span-2 md:col-span-1 text-xs">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className=" mt-4">
          <a href="/" className="text-blue-500 hover:text-blue-700">
            ← Continue Shopping
          </a>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="col-span-1 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>ITEMS {cart.length}</span>
            <span>
              £
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>SHIPPING</span>
            <span>Standard Delivery + £5.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>TOTAL COST</span>
            <span>£{totalCost.toFixed(2)}</span>
          </div>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter your code"
            className="w-full p-2 border rounded"
          />
          <button className="w-full bg-blue-500 text-white py-2 mt-2 rounded hover:bg-blue-600">
            APPLY
          </button>
        </div>
        <button className="w-full bg-green-500 text-white py-2 mt-4 rounded hover:bg-green-600">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartModel;
