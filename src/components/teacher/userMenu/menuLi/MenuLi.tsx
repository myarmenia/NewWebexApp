import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IteacherMenu } from "../../../../models/interfaces";

interface MenuLiProps extends IteacherMenu {
  chooseMenuItem: (id: number) => void;
}

export const MenuLi: React.FC<MenuLiProps> = ({
  title,
  img,
  activeImg,
  id,
  isClicked,
  chooseMenuItem,
  to,
}) => {
  return (
    <li
      className={`menuLi ${isClicked ? "activeMenuItem" : ""}`}
      onClick={() => chooseMenuItem(id!)}
    >
      <Link to={to!} className="menuA">
        {/* <a className="menuA" href="#"> */}
        <img src={isClicked ? activeImg : img} alt="" />
        <span className="menuSpan">{title}</span>
        {/* </a> */}
      </Link>
    </li>
  );
};
