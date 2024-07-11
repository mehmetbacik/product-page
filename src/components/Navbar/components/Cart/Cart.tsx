import React from "react";
import CartImg from "../../../../assets/images/icon-cart.svg";

const CartIcon: React.FC = () => (
  <div className="cart">
    <img
      src={CartImg}
      alt="Cart"
      className="text-gray-700 text-2xl cursor-pointer"
    />
  </div>
);

export default CartIcon;
