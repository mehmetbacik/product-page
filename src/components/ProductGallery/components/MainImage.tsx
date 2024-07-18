import React from "react";

interface MainImageProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const MainImage: React.FC<MainImageProps> = ({ src, alt, onClick }) => {
  return (
    <div className="main-image">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
};

export default MainImage;
