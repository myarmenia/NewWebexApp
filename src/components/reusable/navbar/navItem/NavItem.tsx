import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navItem.module.css";

interface NavItemProps {
  title: string;
  path?: string;
}

export const NavItem: FC<NavItemProps> = ({ path, title }) => {
  return (
    <NavLink to={path!} className={styles.navItem}>
      <span className="hoverTextAnimation">{title}</span>
    </NavLink>
  );
};
