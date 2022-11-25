import React from "react";
import listImg from "../../../images/Header/list.svg";
import './listImg.css'

interface ListImgProps {
  setDropMenuActive: (e: boolean) => void;
  setDropMenu: (e: boolean) => void;
  dropMenu: boolean;
}

export const ListImg: React.FC<ListImgProps> = ({
  setDropMenuActive,
  setDropMenu,
  dropMenu,
}) => {
  return (
    <img
      src={listImg}
      alt=""
      className="listImg"
      onClick={() => {
        setDropMenuActive(true);
        setDropMenu(!dropMenu);
      }}
    />
  );
};
