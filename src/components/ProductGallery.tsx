import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Product } from "../data/products";
import PrevIcon from "../assets/images/icon-previous.svg";
import NextIcon from "../assets/images/icon-next.svg";
import CloseIcon from "../assets/images/icon-close.svg";

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
      <div className="main-image mb-4">
        <img
          src={product.images[mainImageIndex]}
          alt={product.title}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => openGallery(mainImageIndex)}
        />
      </div>
      <div className="thumbnails grid grid-cols-4 gap-2">
        {product.thumbnails.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={product.title}
            className={`w-full h-full object-cover cursor-pointer ${
              mainImageIndex === index ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => selectMainImage(index)}
          />
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white p-4 rounded max-w-2xl w-full mx-auto"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <div className="relative">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="max-w-full max-h-full"
                />
                <button
                  className="absolute top-4 right-4 text-white text-2xl"
                  onClick={closeGallery}
                >
                  <img src={CloseIcon} alt="Close" className="w-6 h-6" />
                </button>
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
                  onClick={prevImage}
                >
                  <img src={PrevIcon} alt="Previous" className="w-6 h-6" />
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
                  onClick={nextImage}
                >
                  <img src={NextIcon} alt="Next" className="w-6 h-6" />
                </button>
              </div>
              <div className="thumbnails grid grid-cols-4 gap-2 mt-4">
                {product.thumbnails.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={product.title}
                    className={`w-full h-full object-cover cursor-pointer ${
                      selectedImage === index ? "border-2 border-blue-500" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductGallery;
