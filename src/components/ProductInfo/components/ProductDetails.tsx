import React from "react";
import { Product } from "../../../data/products";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const discountPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="product-detail">
      <h2>{product.brand}</h2>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
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
    </div>
  );
};

export default ProductDetails;
