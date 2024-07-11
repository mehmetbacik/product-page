import React, { useState } from "react";
import "./styles/Navbar.scss";
import Logo from "./components/Logo/Logo";
import NavLinks from "./components/NavLinks/NavLinks";
import Cart from "./components/Cart/Cart";
import User from "./components/User/User";
import MobileMenuButton from "./components/MobileMenuButton/MobileMenuButton";
import MobileMenu from "./components/MobileMenu/MobileMenu";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-white shadow-md py-4 px-8 flex justify-between items-center relative">
      <MobileMenuButton toggleMenu={toggleMenu} />
      <Logo />
      <NavLinks />
      <Cart />
      <User />
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
