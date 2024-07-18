import React from "react";

interface ThumbnailProps {
  src: string;
  alt: string;
  isSelected: boolean;
  onClick: () => void;
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  src,
  alt,
  isSelected,
  onClick,
}) => {
  return (
    <div className={`thumbnail-img ${isSelected ? "thumbnail-selected" : ""}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full ${
          isSelected ? "thumbnail-img-selected" : ""
        }`}
        onClick={onClick}
      />
    </div>
  );
};

export default Thumbnail;
