import React from "react";

interface OrderSummaryItemProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
  onRemove: (id: number, title: string) => void;
}

const OrderSummaryItem: React.FC<OrderSummaryItemProps> = ({
  id,
  title,
  price,
  quantity,
  onRemove,
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <img
        src={`/src/assets/images/${id}.jpg`}
        alt={title}
        className="w-16 h-16 object-cover"
      />
      <div className="ml-4 flex-1">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">
          ${price.toFixed(2)} x {quantity}
        </p>
        <p className="text-sm font-bold">${(price * quantity).toFixed(2)}</p>
      </div>
      <button
        onClick={() => onRemove(id, title)}
        className="text-red-500 text-sm"
      >
        Remove
      </button>
    </div>
  );
};

export default OrderSummaryItem;
