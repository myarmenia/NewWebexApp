import React, { useState } from "react";
import "./userHeader.css";
import searchImg from "../../../images/Teacher/Header/searchImg.svg";
import notifImg from "../../../images/Teacher/Header/Notification.svg";
import teacherImg from "../../../images/Teacher/Header/Rectangle 83.svg";
import { INavItemsContent } from "../../../models/interfaces";
import { Navbar } from "../../header/navbar/Navbar";
import { SMNavbar } from "./smNavbar/SMNavbar";
import chevDown from "../../../images/chevDown.svg";
import { UserPanel } from "./userPanel/UserPanel";

export const UserHeaderStore: INavItemsContent[] = [
  "Գլխավոր",
  "Հարթակ",
  "Սակագներ",
  "Դասընթացներ",
  { title: "Ընկերություն", options: ["cccc", "1111111"] },
];

export const UserHeader: React.FC = () => {
  const [isPanelActive, setIsPanelActive] = useState<boolean>(false);
  return (
    <header className="header">
      <div id="logoDiv">
        <div id="logoImgDiv">
          {/* <img id="logo" src="" /> */}
          Logo
        </div>
      </div>
      <nav className="userCont">
        <div className="userNavbar">
          <Navbar navbarItems={UserHeaderStore} />
        </div>
        {/* <SMNavbar /> */}
        <div className="icons">
          <img src={searchImg} id="searchBtn" className="cursor-pointer" />
          <div id="notificationImage">
            <img src={notifImg} className="cursor-pointer" />
          </div>
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setIsPanelActive(true)}
            onMouseLeave={() => setIsPanelActive(false)}
          >
            <div className="flex items-center gap-1">
              <p className="personName">Անուն Ազգանուն</p>
              <img src={chevDown} alt="" className="w-3 h-3" />
            </div>
            {isPanelActive && <UserPanel />}
          </div>
          <img id="personImage" src={teacherImg} className="cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};
