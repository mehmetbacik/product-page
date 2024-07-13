import React from "react";

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  setQuantity,
}) => {
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity-selector flex items-center mb-4">
      <button
        onClick={decreaseQuantity}
        className="px-2 py-1 bg-gray-200 rounded-l"
        disabled={quantity === 0}
      >
        -
      </button>
      <span className="px-4 py-2 bg-gray-100">{quantity}</span>
      <button
        onClick={increaseQuantity}
        className="px-2 py-1 bg-gray-200 rounded-r"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
