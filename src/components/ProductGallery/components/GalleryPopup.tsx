import React from "react";
import { motion } from "framer-motion";
import PrevIcon from "../../../assets/images/icon-previous.svg";
import NextIcon from "../../../assets/images/icon-next.svg";
import CloseIcon from "../../../assets/images/icon-close.svg";
import Thumbnail from "./Thumbnail";

interface GalleryPopupProps {
  images: string[];
  selectedImage: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectImage: (index: number) => void;
}

const GalleryPopup: React.FC<GalleryPopupProps> = ({
  images,
  selectedImage,
  onClose,
  onNext,
  onPrev,
  onSelectImage,
}) => {
  return (
    <motion.div
      className="gallery-popup bg-black bg-opacity-75"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative max-w-[300px] md:max-w-lg w-full mx-auto"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
      >
        <div className="gallery-content">
          <img
            src={images[selectedImage]}
            alt={`Image ${selectedImage}`}
            className="product-image max-w-full max-h-full"
          />
          <button className="icon-close" onClick={onClose}>
            <img src={CloseIcon} alt="Close" />
          </button>
          <button
            className="icon-prev transform -translate-y-1/2"
            onClick={onPrev}
          >
            <img src={PrevIcon} alt="Previous" />
          </button>
          <button
            className="icon-next transform -translate-y-1/2"
            onClick={onNext}
          >
            <img src={NextIcon} alt="Next" />
          </button>
        </div>
        <div className="thumbnails">
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              isSelected={selectedImage === index}
              onClick={() => onSelectImage(index)}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GalleryPopup;
