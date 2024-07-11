import React from "react";
import MenuImg from "../../../../assets/images/icon-menu.svg";

interface MobileMenuButtonProps {
  toggleMenu: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ toggleMenu }) => (
  <div className="md:hidden flex items-center">
    <button onClick={toggleMenu} className="text-gray-700 text-2xl">
      <img
        src={MenuImg}
        alt="Menu"
        className="text-gray-700 text-2xl cursor-pointer"
      />
    </button>
  </div>
);

export default MobileMenuButton;
