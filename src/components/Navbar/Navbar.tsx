import React from "react";
import "./styles/Navbar.scss";
import Logo from "../../assets/images/logo.svg";
import Cart from "../../assets/images/icon-cart.svg";
import User from "../../assets/images/image-avatar.png";
import { menuItems } from "../../data/menu";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className="logo">
        <img src={Logo} alt="Company Logo" />
      </div>
      <div className="nav-links hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-700 hover:text-gray-900"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="cart-icon flex items-center space-x-4">
        <img
          src={Cart}
          alt="Cart"
          className="text-gray-700 text-2xl cursor-pointer"
        />
        <img src={User} alt="User" className="h-10 w-10 rounded-full" />
      </div>
    </nav>
  );
};

export default Navbar;
