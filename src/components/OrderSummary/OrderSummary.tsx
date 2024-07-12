import React from "react";

interface OrderSummaryProps {
  cartItems: {
    id: number;
    title: string;
    price: number;
    quantity: number;
  }[];
  onClose: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cartItems, onClose }) => (
  <div className="cart-summary bg-white p-4 shadow-md rounded-md">
    <h2 className="text-lg font-bold mb-4">Order Summary</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <img
              src={`/src/assets/images/${item.id}.jpg`}
              alt={item.title}
              className="w-16 h-16 object-cover"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">
                ${item.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
            <button onClick={() => {}} className="text-red-500 text-sm">
              Remove
            </button>
          </div>
        ))}
        <div className="text-right font-bold">
          Total: $
          {cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </div>
      </div>
    )}
    <button
      className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition duration-300"
      onClick={onClose}
    >
      Close
    </button>
  </div>
);

export default OrderSummary;
