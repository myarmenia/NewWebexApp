import React, { useState } from "react";
import { IteacherMenu } from "../../../../models/interfaces";

interface MenuLiProps extends IteacherMenu {
  chooseMenuItem: (id: number) => void;
}

export const MenuLi: React.FC<MenuLiProps> = ({
  title,
  img,
  id,
  isClicked,
  chooseMenuItem,
}) => {
  return (
    <li
      className={`menuLi ${isClicked ? "activeMenuItem" : ""}`}
      onClick={() => chooseMenuItem(id!)}
    >
      <a className="menuA" href="#">
        <img src={img} alt="" />
        <span className="menuSpan">{title}</span>
      </a>
    </li>
  );
};
