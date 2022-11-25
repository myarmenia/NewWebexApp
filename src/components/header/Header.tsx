import React, { useEffect, useState } from "react";
import "./header.css";
// import { CustomSelect } from "./CustomSelect/CustomSelect";
// import { headerStore } from "./HeaderStore";
// import { NavItem } from "./navItem/NavItem";
import listImg from "../../images/Header/list.svg";
import { Navbar } from "./navbar/Navbar";
import { SmallMenu } from "./SmallMenu/SmallMenu";
import { ListImg } from "./listImg/ListImg";

export const Header: React.FC = () => {
  const [mediaState, setMediaState] = useState<boolean>(false);
  const [dropMenuActive, setDropMenuActive] = useState<boolean>(false);
  const [dropMenu, setDropMenu] = useState<boolean>(false);
  useEffect(() => {
    if (window.innerWidth <= 800) {
      setMediaState(true);
    }
  }, []);
  return (
    <>
      <div className="header">
        <div className="headerCotainer">
          <div className="LogoDiv">
            logo
            {/* <img src="" alt="" className=""/> */}
          </div>
          {mediaState ? (
            <ListImg
              setDropMenu={setDropMenu}
              setDropMenuActive={setDropMenuActive}
              dropMenu={dropMenu}
            />
          ) : (
            <div className="flex items-center">
              <Navbar />
            </div>
          )}
        </div>
      </div>
      {dropMenuActive && <SmallMenu animActive={dropMenu} />}
    </>
  );
};
