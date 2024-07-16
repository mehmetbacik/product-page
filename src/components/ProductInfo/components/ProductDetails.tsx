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
      <div className="prices">
        <div className="first-line">
          <span className="discount-price">${discountPrice.toFixed(2)}</span>
          {product.discountPercentage > 0 && (
            <>
              <span className="discount-percentange">
                {product.discountPercentage}%
              </span>
            </>
          )}
        </div>
        <div className="second-line">
          {product.discountPercentage > 0 && (
            <>
              <span className="product-price">${product.price.toFixed(2)}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
