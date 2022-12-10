import React, { useState } from "react";
import "./userHeader.css";
import searchImg from "../../../images/Teacher/Header/searchImg.svg";
import notifImg from "../../../images/Teacher/Header/Notification.svg";
import teacherImg from "../../../images/Teacher/Header/Rectangle 83.svg";
import exitImg from "../../../images/Teacher/Header/Group 1498.svg";
import { INavItemsContent } from "../../../models/interfaces";
import { Navbar } from "../../header/navbar/Navbar";
import { SMNavbar } from "./smNavbar/SMNavbar";

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
    <div className="header">
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
            onPointerMove={() => setIsPanelActive(true)}
            onPointerLeave={() => setIsPanelActive(false)}
          >
            <p className="personName">Lorem, ipsum</p>
            {isPanelActive && (
              <div className="panel">
                <div>
                  <p className="panelTitle">
                    Ղեկավարման վահանակ
                  </p>
                  <div className="exitHEadBox">
                    <img id="exit" src={exitImg} className="cursor-pointer" />
                    <span className="text-xs text-[#9C9C9C] whitespace-nowrap">
                      Դուրս գալ
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <img id="personImage" src={teacherImg} className="cursor-pointer" />
        </div>
      </nav>
    </div>
  );
};
