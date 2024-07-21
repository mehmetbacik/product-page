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
    <nav className="navbar container mx-auto mb-0 md:mb-4 flex justify-between items-center relative">
      <div className="nav-left">
        <MobileMenuButton toggleMenu={toggleMenu} />
        <Logo />
        <NavLinks />
      </div>
      <div className="nav-right">
        <Cart />
        <User />
      </div>
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
