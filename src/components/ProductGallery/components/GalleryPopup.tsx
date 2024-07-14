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
            src={images[selectedImage]}
            alt={`Image ${selectedImage}`}
            className="max-w-full max-h-full"
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={onClose}
          >
            <img src={CloseIcon} alt="Close" className="w-6 h-6" />
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            onClick={onPrev}
          >
            <img src={PrevIcon} alt="Previous" className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
            onClick={onNext}
          >
            <img src={NextIcon} alt="Next" className="w-6 h-6" />
          </button>
        </div>
        <div className="thumbnails grid grid-cols-4 gap-2 mt-4">
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
