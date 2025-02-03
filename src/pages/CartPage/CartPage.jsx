// import { useCart } from "../../utils/CartProvider/CartProvider";

// const CartPage = () => {
//   const { cart } = useCart();

//   return (
//     <div className="container mx-auto p-5">
//       <h1 className="text-3xl font-bold mb-5">Shopping Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="space-y-5">
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="flex justify-between border p-3 rounded-lg"
//             >
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={item.Images}
//                   alt={item.Title}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//                 <div>
//                   <h2 className="text-lg font-semibold">{item.Title}</h2>
//                   <p className="text-gray-500">Quantity: {item.quantity}</p>
//                 </div>
//               </div>
//               <span className="font-bold text-lg">
//                 ৳{item.Price * item.quantity}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
