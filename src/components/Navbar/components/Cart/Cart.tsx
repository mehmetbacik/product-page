import React, { useState } from "react";
import CartImg from "../../../../assets/images/icon-cart.svg";
import OrderSummary from "../../../../components/OrderSummary/OrderSummary";
import { useCart } from "../../../../context/CartContext";

const Cart: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart relative">
      <img
        src={CartImg}
        alt="Cart"
        className="text-gray-700 text-2xl cursor-pointer"
        onClick={toggleCart}
      />
      {isCartOpen && (
        <div className="cart-overlay fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <OrderSummary cartItems={cartItems} onClose={toggleCart} />
        </div>
      )}
    </div>
  );
};

export default Cart;
