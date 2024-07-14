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
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover cursor-pointer ${
        isSelected ? "border-2 border-blue-500" : ""
      }`}
      onClick={onClick}
    />
  );
};

export default Thumbnail;
