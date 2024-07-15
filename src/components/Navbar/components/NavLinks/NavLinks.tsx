import React from "react";
import { menuItems } from "../../../../data/menu";

const NavLinks: React.FC = () => (
  <div className="nav-links hidden md:flex space-x-8">
    {menuItems.map((item) => (
      <a key={item.name} href={item.href}>
        {item.name}
      </a>
    ))}
  </div>
);

export default NavLinks;
