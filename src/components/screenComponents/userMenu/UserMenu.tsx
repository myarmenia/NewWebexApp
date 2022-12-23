import React, { FC } from "react";
import "./userMenu.css";
import { MenuLi } from "./menuLi/MenuLi";

import { IteacherMenu } from "../../../models/interfaces";
// passive images
import img1 from "../../../assets/teacher_images/menu/passiveImgs/Անձնական տվյալներ.svg";
import img2 from "../../../assets/teacher_images/menu/passiveImgs/Դասընթացներ.svg";
import img3 from "../../../assets/teacher_images/menu/passiveImgs/Դասընթացի գրաֆիկ.svg";
import img4 from "../../../assets/teacher_images/menu/passiveImgs/Ուսանողներ.svg";
import img5 from "../../../assets/teacher_images/menu/passiveImgs/Դրամապանակ.svg";
import img7 from "../../../assets/teacher_images/menu/passiveImgs/Group 1673.svg";
import img8 from "../../../assets/teacher_images/menu/passiveImgs/Group 1674.svg";
import img9 from "../../../assets/teacher_images/menu/passiveImgs/Group 1711.svg";
// active images
import activeImg1 from "../../../assets/teacher_images/menu/activeImgs/Անձնական տվյալներ.svg";
import activeImg2 from "../../../assets/teacher_images/menu/activeImgs/Դասընթացներ.svg";
import activeImg3 from "../../../assets/teacher_images/menu/activeImgs/Դասընթացի գրաֆիկ.svg";
import activeImg4 from "../../../assets/teacher_images/menu/activeImgs/Ուսանողներ.svg";
import activeImg5 from "../../../assets/teacher_images/menu/activeImgs/Դրամապանակ.svg";
import activeImg6 from "../../../assets/teacher_images/menu/activeImgs/Group 1711.svg";
import activeImg7 from "../../../assets/teacher_images/menu/activeImgs/Group 1673.svg";
import activeImg8 from "../../../assets/teacher_images/menu/activeImgs/Group 1674.svg";
import { MItemsDrop } from "./mItemsDrop/MItemsDrop";

const menuItems: IteacherMenu[] = [
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
    to: "feedback/student/1/lesson/1/task",
  },
  {
    id: Math.random(),
    img: img8,
    activeImg: activeImg8,
    title: "Աջակցության կենտրոն",
    to: "panel",
  },
];

export const UserMenu: FC = () => {
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
