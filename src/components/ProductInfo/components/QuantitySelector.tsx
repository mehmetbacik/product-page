import React from "react";
import Plus from "../../../assets/images/icon-plus.svg";
import Minus from "../../../assets/images/icon-minus.svg";

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
    <div className="quantity-selector flex items-center">
      <button
        onClick={decreaseQuantity}
        className="w-full"
        disabled={quantity === 0}
      >
        <img src={Minus} alt="minus" />
      </button>
      <span className="w-full">{quantity}</span>
      <button onClick={increaseQuantity} className="w-full">
        <img src={Plus} alt="plus" />
      </button>
    </div>
  );
};

export default QuantitySelector;
