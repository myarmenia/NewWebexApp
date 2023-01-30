import { FC, useEffect, useState } from "react";
import { Navbar } from "../../../components/reusable/navbar/Navbar";
import "./header.css";
import { headerStore } from "./HeaderStore";
import { ListImg } from "./listImg/ListImg";
import { SmallMenu } from "./smallMenu/SmallMenu";

export const Header: FC = () => {
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
              <Navbar navbarItems={headerStore} />
            </div>
          )}
        </div>
      </div>
      {dropMenuActive && <SmallMenu animActive={dropMenu} />}
    </>
  );
};
