import React from "react";
import { Card } from "./Card/Card";
import './SearchArea.css'

export const SearchArea: React.FC = () => {
  return (
    <div className="searchArea">
      <div className="searchPart">
        <h3 className="text-[#7A64FA] text-2xl font-bold leading-[178%]">
          Անցիր օնլայն դասընթաց, զարգացրու հմտություններդ “Webex”-ի հետ
        </h3>
        <p className="text-[#6B6B6B] text-base">
          Գտիր քեզ հետաքրքրող դասընթացը, Անցիր օնլայն դասընթաց, զարգացրու
          հմտություններդ “Webex”-ի հետ քեզ հետաքրքրող դասընթացը
        </p>
        <input
          type="text"
          className="inputSearch"
        />
      </div>
      <div className="cards">
        <Card url="" className="" />
      </div>
    </div>
  );
};
