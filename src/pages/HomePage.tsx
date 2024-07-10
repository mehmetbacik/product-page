import React from "react";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <ProductGallery />
      <ProductInfo />
    </div>
  );
};

export default HomePage;
