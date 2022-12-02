import React from "react";
import "./userHeader.css";
import searchImg from "../../../images/Teacher/Header/searchImg.svg";
import notifImg from "../../../images/Teacher/Header/Notification.svg";
import teacherImg from "../../../images/Teacher/Header/Rectangle 83.svg";
import exitImg from "../../../images/Teacher/Header/Group 1498.svg";

export const UserHeader: React.FC = () => {
  return (
    <div className="header">
      <div id="logoDiv">
        <div id="logoImgDiv">
          {/* <img id="logo" src="" /> */}
          Logo
        </div>
      </div>
      <nav className="userCont">
        <div className="icons">
          <img src={searchImg} id="searchBtn" className="cursor-pointer" />
          <div id="notificationImage">
            <img src={notifImg} className="cursor-pointer" />
          </div>
          <p className="personName">Lorem, ipsum</p>
          <img id="personImage" src={teacherImg} className="cursor-pointer" />
          <img id="exit" src={exitImg} className="cursor-pointer" />
        </div>
      </nav>
    </div>
  );
};
