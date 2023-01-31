import { FC, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import chevDown from "../../../../assets/general_images/chevDown.svg";
import chevDownPurple from "../../../../assets/general_images/chevDownPurple.svg";
import { IteacherMenu } from "../../../../models/interfaces";
import styles from "./mItemsDrop.module.css";
import styles1 from "../userMenu.module.css";

interface MItemsDropProps extends IteacherMenu {}

export const MItemsDrop: FC<MItemsDropProps> = ({
  toSubPaths,
  activeImg,
  img,
  title,
}) => {
  const { pathname } = useLocation();
  const [isDroped, setIsDroped] = useState<boolean>(false);
  const thisPathState = toSubPaths?.some((el) => pathname.includes(el.path));
  return (
    <li
      className={styles.mItemsDrop}
      onClick={() => setIsDroped((prev) => !prev)}
    >
      <div className="hoverTextAnimation">
        <div className={styles1.menuA}>
          <img src={thisPathState ? activeImg : img} alt="" />
          <span
            className={`${styles1.menuSpan} ${
              thisPathState ? "activeMenuItem" : ""
            }`}
          >
            {title}
          </span>
          <img
            src={thisPathState ? chevDownPurple : chevDown}
            alt=""
            className={`${styles.arrowDownMenu} ${
              isDroped ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {isDroped && (
        <div className={styles.sumItems}>
          {toSubPaths?.map((el) => (
            <NavLink
              key={Math.random()}
              to={el.path}
              className={({ isActive }) =>
                `${styles.subMenuSpan} ${
                  isActive ? "textPurple" : "hoverTextAnimation"
                }`
              }
            >
              {el.title}
            </NavLink>
          ))}
        </div>
      )}
    </li>
  );
};
