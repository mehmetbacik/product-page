import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Product } from "../../data/products";
import MainImage from "./components/MainImage";
import Thumbnail from "./components/Thumbnail";
import GalleryPopup from "./components/GalleryPopup";
import "./styles/ProductGallery.scss";

interface ProductGalleryProps {
  product: Product;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setSelectedImage(index);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  const selectMainImage = (index: number) => {
    setMainImageIndex(index);
  };

  return (
    <div className="product-gallery">
      <MainImage
        src={product.images[mainImageIndex]}
        alt={product.title}
        onClick={() => openGallery(mainImageIndex)}
      />
      <div className="thumbnails">
        {product.thumbnails.map((image, index) => (
          <Thumbnail
            key={index}
            src={image}
            alt={product.title}
            isSelected={mainImageIndex === index}
            onClick={() => selectMainImage(index)}
          />
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <GalleryPopup
            images={product.images}
            selectedImage={selectedImage}
            onClose={closeGallery}
            onNext={nextImage}
            onPrev={prevImage}
            onSelectImage={setSelectedImage}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductGallery;
