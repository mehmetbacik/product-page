import React, { useState } from "react";
import { Product } from "../../data/products";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const discountPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="product-info p-4 md:p-8">
      <h2 className="text-gray-500 text-sm mb-2">{product.brand}</h2>
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <div className="flex items-center mb-4">
        <span className="text-2xl font-bold">${discountPrice.toFixed(2)}</span>
        {product.discountPercentage > 0 && (
          <>
            <span className="ml-4 text-green-600 bg-green-100 p-1 rounded">
              {product.discountPercentage}%
            </span>
            <span className="ml-4 text-gray-500 line-through">
              ${product.price.toFixed(2)}
            </span>
          </>
        )}
      </div>
      <div className="flex items-center mb-4">
        <button
          onClick={decreaseQuantity}
          className="px-2 py-1 bg-gray-200 rounded-l"
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
      <div className="flex items-center">
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
