import React, { useState } from "react";
import "./userMenu.css";
import { MenuLi } from "./menuLi/MenuLi";

import { IteacherMenu } from "../../../models/interfaces";
import img1 from "../../../images/Teacher/Menu/Անձնական տվյալներ.svg";
import img2 from "../../../images/Teacher/Menu/Դասընթացներ.svg";
import img3 from "../../../images/Teacher/Menu/Դասընթացի գրաֆիկ.svg";
import img4 from "../../../images/Teacher/Menu/Ուսանողներ.svg";
import img5 from "../../../images/Teacher/Menu/Դրամապանակ.svg";
import img6 from "../../../images/Teacher/Menu/Վիճակագրություն.svg";
import img7 from "../../../images/Teacher/Menu/Group 1673.svg";
import img8 from "../../../images/Teacher/Menu/Group 1674.svg";
import img9 from "../../../images/Teacher/Menu/Group 1711.svg";

export const UserMenu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<IteacherMenu[]>([
    {
      id: Math.random(),
      isClicked: false,
      img: img1,
      title: "Անձնական տվյալներ",
    },
    {
      id: Math.random(),
      isClicked: true,
      img: img2,
      title: "Իմ դասընթացները",
    },
    {
      id: Math.random(),
      isClicked: false,
      img: img3,
      title: "Դասավանդման գրաֆիկ",
    },
    {
      id: Math.random(),
      isClicked: false,
      img: img4,
      title: "Ուսանողներ",
    },
    {
      id: Math.random(),
      isClicked: false,
      img: img5,
      title: "Դրամապանակ",
    },
    {
      id: Math.random(),
      isClicked: false,
      img: img6,
      title: "Վիճակագրություն",
    },
    {
      id: Math.random(),
      isClicked: false,
      img: img9,
      title: "Զեղչեր պրոմո",
    },
    {
      id: Math.random(),
      isClicked: false,
      img: img7,
      title: "Նամակագրություն",
    },
    {
      id: Math.random(),
      isClicked: false,
      img: img8,
      title: "Աջակցության կենտրոն",
    },
  ]);

  const chooseMenuItem = (id: number) => {
    setMenuItems(
      menuItems.map((el) => {
        if (el.id === id) {
          return { ...el, isClicked: true };
        }
        return { ...el, isClicked: false };
      })
    );
  };

  return (
    <nav className="menu">
      <ul id="menuUl">
        {menuItems.map((menuItem) => (
          <MenuLi {...menuItem} key={menuItem.id} {...{ chooseMenuItem }} />
        ))}
      </ul>
    </nav>
  );
};
