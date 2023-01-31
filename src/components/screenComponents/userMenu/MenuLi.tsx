import { NavLink, useLocation } from "react-router-dom";
import { IteacherMenu } from "../../../models/interfaces";
import styles from "./userMenu.module.css";
import { FC } from "react";

interface MenuLiProps extends IteacherMenu {}

export const MenuLi: FC<MenuLiProps> = ({ title, img, activeImg, to }) => {
  const { pathname } = useLocation();
  const isPathsEqual = pathname.includes(to?.split("/")[0]!);
  return (
    <NavLink
      to={to!}
      className={({ isActive }) =>
        isPathsEqual || isActive
          ? [styles.activeMenuItem, styles.menuLi].join(" ")
          : `${styles.menuLi} hoverTextAnimation`
      }
    >
      <div className={styles.menuA}>
        <img
          src={pathname.includes(to!) || isPathsEqual ? activeImg : img}
          alt=""
        />
        <span className={styles.menuSpan}>{title}</span>
      </div>
    </NavLink>
  );
};
