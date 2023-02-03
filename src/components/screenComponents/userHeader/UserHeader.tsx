import { FC, useState } from "react";
import chevDown from "../../../assets/general_images/chevDown.svg";
import notifImg from "../../../assets/teacher_images/header/Notification.svg";
import teacherImg from "../../../assets/teacher_images/header/Rectangle 83.svg";
import searchImg from "../../../assets/teacher_images/header/searchImg.svg";
import { INavItemsContent } from "../../../models/interfaces";
import { Navbar } from "../../reusable";
import "./userHeader.css";
import { UserPanel } from "./userPanel/UserPanel";

export const UserHeaderStore: INavItemsContent[] = [
  { title: "Գլխավոր" },
  { title: "Հարթակ" },
  { title: "Սակագներ" },
  { title: "Դասընթացներ" },
  {
    dropDownTitle: "Ընկերություն",
    options: [
      { title: "student", path: "/student/perosnal_info" },
      { title: "login", path: "/login" },
      { title: "teacher", path: "/teacher" },
    ],
    className: "text-gray",
  },
];

export const UserHeader: FC = () => {
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
          <img
            src={searchImg}
            id="searchBtn"
            className="cursor-pointer"
            alt=""
          />
          <div id="notificationImage">
            <img src={notifImg} className="cursor-pointer" alt="" />
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
          <img
            id="personImage"
            src={teacherImg}
            className="cursor-pointer"
            alt=""
          />
        </div>
      </nav>
    </header>
  );
};
