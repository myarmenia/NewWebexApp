import { FC } from "react";
import { IteacherMenu } from "../../../models/interfaces";
import { MenuLi } from "./MenuLi";
import { MItemsDrop } from "./mItemsDrop/MItemsDrop";
import styles from "./userMenu.module.css";

interface UserMenuProps {
  menuItems: IteacherMenu[];
}

export const UserMenu: FC<UserMenuProps> = ({ menuItems }) => {
  return (
    <nav className={styles.menu}>
      <ul id={styles.menuUl}>
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
