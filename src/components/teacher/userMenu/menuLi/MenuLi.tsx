import React from "react";
import { IteacherMenu } from "../../../../models/interfaces";

export const MenuLi: React.FC<IteacherMenu> = ({ title, img }) => {
  return (
    <li className="menuLi">
      <a className="menuA" href="#">
        <img src={img} alt="" />
        <span className="menuSpan">{title}</span>
      </a>
    </li>
  );
};
