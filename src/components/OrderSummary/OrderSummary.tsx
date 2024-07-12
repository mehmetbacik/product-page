import React from "react";
import { toast } from "react-toastify";

interface OrderSummaryProps {
  cartItems: {
    id: number;
    title: string;
    price: number;
    quantity: number;
  }[];
  onRemove: (id: number) => void;
  onClose: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartItems,
  onRemove,
  onClose,
}) => {
  const handleRemove = (id: number, title: string) => {
    onRemove(id);
    toast.success(`${title} removed from cart!`);
  };

  return (
    <div className="cart-summary bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
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
                <p className="text-sm font-bold">
                  ${item.price * item.quantity}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item.id, item.title)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
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
};

export default OrderSummary;
