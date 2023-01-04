import { FC, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import chevDown from "../../../../assets/general_images/chevDown.svg";
import chevDownPurple from "../../../../assets/general_images/chevDownPurple.svg";
import { IteacherMenu } from "../../../../models/interfaces";
import "./mItemsDrop.css";

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
    <li className="mItemsDrop" onClick={() => setIsDroped((prev) => !prev)}>
      <div className="hoverTextAnimation">
        <div className="menuA">
          <img src={thisPathState ? activeImg : img} alt="" />
          <span className={`menuSpan ${thisPathState ? "activeMenuItem" : ""}`}>
            {title}
          </span>
          <img
            src={thisPathState ? chevDownPurple : chevDown}
            alt=""
            className={`arrowDownMenu ${isDroped ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {isDroped && (
        <div className="sumItems">
          {toSubPaths?.map((el) => (
            <NavLink
              key={Math.random()}
              to={el.path}
              className={({ isActive }) =>
                isActive
                  ? "subMenuSpan textPurple"
                  : "subMenuSpan hoverTextAnimation"
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
