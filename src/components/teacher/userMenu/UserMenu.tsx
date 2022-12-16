import React, { useState } from "react";
import "./userMenu.css";
import { MenuLi } from "./menuLi/MenuLi";

import { IteacherMenu } from "../../../models/interfaces";
// passive images
import img1 from "../../../images/Teacher/Menu/passiveImgs/Անձնական տվյալներ.svg";
import img2 from "../../../images/Teacher/Menu/passiveImgs/Դասընթացներ.svg";
import img3 from "../../../images/Teacher/Menu/passiveImgs/Դասընթացի գրաֆիկ.svg";
import img4 from "../../../images/Teacher/Menu/passiveImgs/Ուսանողներ.svg";
import img5 from "../../../images/Teacher/Menu/passiveImgs/Դրամապանակ.svg";
import img7 from "../../../images/Teacher/Menu/passiveImgs/Group 1673.svg";
import img8 from "../../../images/Teacher/Menu/passiveImgs/Group 1674.svg";
import img9 from "../../../images/Teacher/Menu/passiveImgs/Group 1711.svg";
// active images
import activeImg1 from "../../../images/Teacher/Menu/activeImgs/Անձնական տվյալներ.svg";
import activeImg2 from "../../../images/Teacher/Menu/activeImgs/Դասընթացներ.svg";
import activeImg3 from "../../../images/Teacher/Menu/activeImgs/Դասընթացի գրաֆիկ.svg";
import activeImg4 from "../../../images/Teacher/Menu/activeImgs/Ուսանողներ.svg";
import activeImg5 from "../../../images/Teacher/Menu/activeImgs/Դրամապանակ.svg";
import activeImg6 from "../../../images/Teacher/Menu/activeImgs/Group 1711.svg";
import activeImg7 from "../../../images/Teacher/Menu/activeImgs/Group 1673.svg";
import activeImg8 from "../../../images/Teacher/Menu/activeImgs/Group 1674.svg";
import { MItemsDrop } from "../lesComponents/mItemsDrop/MItemsDrop";

export const UserMenu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<IteacherMenu[]>([
    {
      id: Math.random(),
      img: img1,
      activeImg: activeImg1,
      title: "Անձնական տվյալներ",
      to: "personal_info",
    },
    {
      id: Math.random(),
      img: img2,
      activeImg: activeImg2,
      title: "Իմ դասընթացները",
      // to: "new_lesson",
      to: "my_lesson",
    },
    {
      id: Math.random(),
      img: img3,
      activeImg: activeImg3,
      title: "Դասավանդման գրաֆիկ",
      toSubPaths: [
        {
          path: "create_graffic",
          title: "Դասավանդման գրաֆիկ",
          isClicked: false,
        },
        { path: "calendar", title: "Դասընթացների օրացույց", isClicked: false },
      ],
    },
    {
      id: Math.random(),
      img: img4,
      activeImg: activeImg4,
      title: "Ուսանողներ",
      to: "students",
    },
    {
      id: Math.random(),
      img: img5,
      activeImg: activeImg5,
      title: "Դրամապանակ",
      to: "wallet",
    },
    {
      id: Math.random(),
      img: img9,
      activeImg: activeImg6,
      title: "Զեղչեր պրոմո",
      to: "discount",
    },
    {
      id: Math.random(),
      img: img7,
      activeImg: activeImg7,
      title: "Նամակագրություն",
      to: "feedback",
    },
    {
      id: Math.random(),
      img: img8,
      activeImg: activeImg8,
      title: "Աջակցության կենտրոն",
      to: "panel",
    },
  ]);
  return (
    <nav className="menu">
      <ul id="menuUl">
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
