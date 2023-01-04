import React, { FC } from "react";
import "./userMenu.css";
import { MItemsDrop } from "./mItemsDrop/MItemsDrop";
import { MenuLi } from "./MenuLi";
import { IteacherMenu } from "../../../models/interfaces";

interface UserMenuProps {
  menuItems: IteacherMenu[];
}

export const UserMenu: FC<UserMenuProps> = ({ menuItems }) => {
  return (
    <nav className="menu">
      <ul id="menuUl">
        {menuItems.map((menuItem) => {
          if (menuItem.toSubPaths) {
            return <MItemsDrop {...menuItem} key={menuItem.id} />;
          }
          return <MenuLi {...menuItem} key={menuItem.id} />;
        })}
      </ul>
    </nav>
  );
};
