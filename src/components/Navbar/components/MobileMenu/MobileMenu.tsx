import React from "react";
import CloseImg from "../../../../assets/images/icon-close.svg";
import { menuItems } from "../../../../data/menu";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => (
  <div
    className={`fixed inset-0 bg-black bg-opacity-75 z-10 transition-opacity duration-300 ${
      isOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
    onClick={toggleMenu}
  >
    <div
      className={`fixed left-0 top-0 w-[200px] h-full bg-white shadow-md z-20 p-8 flex flex-col space-y-4 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={toggleMenu} className="self-start mb-4">
        <img src={CloseImg} alt="Close" />
      </button>
      {menuItems.map((item) => (
        <a key={item.name} href={item.href} className="text-black font-bold">
          {item.name}
        </a>
      ))}
    </div>
  </div>
);

export default MobileMenu;
