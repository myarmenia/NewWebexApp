import React from "react";
import { MenuLi } from "./menuLi/MenuLi";
import { menu } from "./myStore";
import "./userMenu.css";

export const UserMenu: React.FC = () => {
  return (
    <nav className="menu">
      <ul id="menuUl">
        {menu.map((menuItem) => (
          <MenuLi {...menuItem} key={menuItem.id} />
        ))}
      </ul>
    </nav>
  );
};
