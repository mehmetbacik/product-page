import React, { useState } from "react";
import CartImg from "../../../../assets/images/icon-cart.svg";
import OrderSummary from "../../../../components/OrderSummary/OrderSummary";
import { useCart } from "../../../../context/CartContext";

const Cart: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, removeFromCart } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart relative flex items-center">
      <img
        src={CartImg}
        alt="Cart"
        className="text-gray-700 text-2xl cursor-pointer"
        onClick={toggleCart}
      />
      <div className="ml-2 text-sm">
        <p>Total Items: {totalItems}</p>
      </div>
      {isCartOpen && (
        <div className="cart-overlay fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <OrderSummary
            cartItems={cartItems}
            onRemove={handleRemove}
            onClose={toggleCart}
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
