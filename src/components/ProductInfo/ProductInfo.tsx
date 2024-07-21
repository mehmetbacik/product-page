import React, { useState } from "react";
import { Product } from "../../data/products";
import QuantitySelector from "./components/QuantitySelector";
import ProductDetails from "./components/ProductDetails";
import AddToCartButton from "./components/AddToCartButton";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import "./styles/ProductInfo.scss";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
      toast.success(`${product.title} added to cart`);
    } else {
      toast.error("Please select at least one quantity");
    }
  };

  return (
    <div className="product-info">
      <ProductDetails product={product} />
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-3">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <AddToCartButton
          quantity={quantity}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
