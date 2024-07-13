import React from "react";

interface AddToCartButtonProps {
  quantity: number;
  handleAddToCart: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  quantity,
  handleAddToCart,
}) => {
  return (
    <button
      onClick={handleAddToCart}
      className={`bg-blue-600 text-white py-2 px-4 rounded ${
        quantity === 0
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-blue-700 transition duration-300"
      }`}
      disabled={quantity === 0}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
