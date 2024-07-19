import React from "react";
import Delete from "../../../assets/images/icon-delete.svg";
import { Product } from "../../../data/products";

interface OrderSummaryItemProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
  onRemove: (id: number, title: string) => void;
  products: Product[];
}

const OrderSummaryItem: React.FC<OrderSummaryItemProps> = ({
  id,
  title,
  price,
  quantity,
  onRemove,
  products,
}) => {
  const product = products.find((product) => product.id === id);

  return (
    <div className="product-content">
      <div className="product-item">
        {product && (
          <img
            className="product-image"
            src={product.images[0]}
            alt={title}
          />
        )}
        <div className="product-item-content">
          <h3>{title}</h3>
          <div className="price">
            <p className="product-quantity">
              ${price.toFixed(2)} x {quantity}
            </p>
            <p className="product-price">${(price * quantity).toFixed(2)}</p>
          </div>
        </div>
        <button onClick={() => onRemove(id, title)}>
          <img src={Delete} alt="Delete" />
        </button>
      </div>
      <div className="checkout">
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default OrderSummaryItem;
