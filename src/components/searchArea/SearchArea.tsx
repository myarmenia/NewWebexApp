import React from "react";
import "./searchArea.css";
import { SearchBox } from "./searchBox/SearchBox";
import img1 from "../../images/SearchArea/Group (1).svg";
import img2 from "../../images/SearchArea/Group (2).svg";
import img3 from "../../images/SearchArea/Group (3).svg";
import img4 from "../../images/SearchArea/Group (4).svg";
import img5 from "../../images/SearchArea/Group (5).svg";
import img6 from "../../images/SearchArea/Group (6).svg";
import { SearchBoxProps } from "../../models/interfaces";
import searchBtn from "../../images/SearchArea/inputSearch.svg";

const images: SearchBoxProps[] = [
  { url: img1, className: "top-[34%]", alt: "alt", title: "title1" },
  { url: img2, className: "top-0 left-[32%]" },
  { url: img3, className: "top-[37%] left-[48%]" },
  { url: img4, className: "top-auto bottom-0 left-[28%]" },
  { url: img5, className: "top-[12%] left-auto right-0" },
  { url: img6, className: "top-[65%] left-auto right-[5%]" },
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
        {images.map((el, index) => (
          <SearchBox {...el} key={index} />
        ))}
      </div>
    </div>
  );
};
