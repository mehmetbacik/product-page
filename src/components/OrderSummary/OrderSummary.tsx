import React from "react";
import { toast } from "react-toastify";
import OrderSummaryItem from "./components/OrderSummaryItem";

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
    <div className="order-summary bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <OrderSummaryItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              onRemove={handleRemove}
            />
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
