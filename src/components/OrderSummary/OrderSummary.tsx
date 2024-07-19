import React from "react";
import { toast } from "react-toastify";
import OrderSummaryItem from "./components/OrderSummaryItem";
import { products } from "../../data/products";
import "./styles/OrderSummary.scss";

interface OrderSummaryProps {
  cartItems: {
    id: number;
    title: string;
    price: number;
    quantity: number;
  }[];
  onRemove: (id: number) => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cartItems, onRemove }) => {
  const handleRemove = (id: number, title: string) => {
    onRemove(id);
    toast.success(`${title} removed from cart!`);
  };

  return (
    <div className="order-summary">
      <div className="title">
        <h2>Cart</h2>
      </div>
      <div className="content">
        {cartItems.length === 0 ? (
          <div className="empty">
            <p>Your cart is empty.</p>
          </div>
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
                products={products}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
