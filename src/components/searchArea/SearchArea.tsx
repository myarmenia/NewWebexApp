import React from "react";
import "./SearchArea.css";
import { SearchBox } from "./searchBox/SearchBox";
import img1 from "../../images/SearchArea/Group (1).svg";
import img2 from "../../images/SearchArea/Group (2).svg";
import img3 from "../../images/SearchArea/Group (3).svg";
import img4 from "../../images/SearchArea/Group (4).svg";
import img5 from "../../images/SearchArea/Group (5).svg";
import img6 from "../../images/SearchArea/Group (6).svg";
import { IImages } from "../../models/interfaces";
import searchBtn from "../../images/SearchArea/inputSearch.svg";

const images: IImages[] = [
  { image: img1, position: "top-[34%]" },
  { image: img2, position: "top-0 left-[32%]" },
  { image: img3, position: "top-[37%] left-[48%]" },
  { image: img4, position: "top-auto bottom-0 left-[28%]" },
  { image: img5, position: "top-[12%] left-auto right-0" },
  { image: img6, position: "top-[65%] left-auto right-[5%]" },
];

export const SearchArea: React.FC = () => {
  return (
    <div className="search">
      <div className="searchPart">
        <h4 className="searchTitle">
          Անցիր օնլայն դասընթաց, զարգացրու հմտություններդ “Webex”-ի հետ
        </h4>
        <p className="">
          Գտիր քեզ հետաքրքրող դասընթացը, Անցիր օնլայն դասընթաց, զարգացրու
          հմտություններդ “Webex”-ի հետ քեզ հետաքրքրող դասընթացը
        </p>
        <div className="relative">
          <input type="text" className="searchInput" />
          <img src={searchBtn} alt="" className="searchBtn" />
        </div>
      </div>
      <div className="searchBoxes">
        {images.map(({ position, image }, index) => (
          <SearchBox url={image} className={position} key={index} />
        ))}
      </div>
    </div>
  );
};
