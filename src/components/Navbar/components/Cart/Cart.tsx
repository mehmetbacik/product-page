import React from "react";
import CartImg from "../../../../assets/images/icon-cart.svg";
import OrderSummary from "../../../../components/OrderSummary/OrderSummary";
import { useCart } from "../../../../context/CartContext";

const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart flex items-center">
      <div className="cart-icon relative">
        <img src={CartImg} alt="Cart" className="cart-icon" />
        <div className="total-items">
          <p>{totalItems}</p>
        </div>
      </div>
      <div className="cart-summary">
        <OrderSummary cartItems={cartItems} onRemove={handleRemove} />
      </div>
    </div>
  );
};

export default Cart;
