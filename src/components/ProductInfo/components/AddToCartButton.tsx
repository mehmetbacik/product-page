import React from "react";
import Cart from "../../../assets/images/icon-cart.svg";

interface AddToCartButtonProps {
  quantity: number;
  handleAddToCart: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  quantity,
  handleAddToCart,
}) => {
  return (
    <div className="add-cart-button">
      <button
        onClick={handleAddToCart}
        className={`w-full ${
          quantity === 0
            ? "opacity-50 cursor-not-allowed"
            : "transition duration-300"
        }`}
        disabled={quantity === 0}
      >
        <img src={Cart} alt="cart" className="image" />
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
