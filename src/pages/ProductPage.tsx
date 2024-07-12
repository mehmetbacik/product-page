import React from "react";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import { products } from "../data/products";

const ProductPage: React.FC = () => {
  const product = products[0];
  return (
    <div className="product">
      <ProductGallery />
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductPage;
