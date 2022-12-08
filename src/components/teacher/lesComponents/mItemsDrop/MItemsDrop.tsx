import React, { FC } from "react";
import "./mItemsDrop.css";
import { Link } from "react-router-dom";
import { IteacherMenu } from "../../../../models/interfaces";
import chevDown from "../../../../images/chevDown.svg";
import chevDownPurple from "../../../../images/chevDownPurple.svg";

interface MItemsDropProps extends IteacherMenu {
  chooseMenuItem: (id: number) => void;
}

export const MItemsDrop: FC<MItemsDropProps> = ({
  id,
  toSubPaths,
  isClicked,
  activeImg,
  img,
  title,
  chooseMenuItem,
}) => {
  return (
    <li
      className={`mItemsDrop ${isClicked ? "activeMenuItem" : ""}`}
      onClick={() => chooseMenuItem(id!)}
    >
      <div className="menuA">
        <img src={isClicked ? activeImg : img} alt="" />
        <p className="menuSpan">{title}</p>
        <img
          src={isClicked ? chevDownPurple : chevDown}
          alt=""
          className={`w-4 h-3 duration-200 ${isClicked ? "rotate-180" : ""}`}
        />
      </div>
      {isClicked && (
        <div className="flex flex-col gap-2 w-fit ml-9">
          {toSubPaths?.map((el) => (
            <Link
              key={Math.random()}
              to={el.path}
              className="subMenuSpan textPurple"
            >
              {el.title}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};
