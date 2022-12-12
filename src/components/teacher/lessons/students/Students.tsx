import React, { FC } from "react";
import "./students.css";
import { CustomDropdown } from "../../../header/customDropdown/CustomDropdown";
import { LessonTitle } from "../../lessonTitle/LessonTitle";
import { StdThead } from "./stdComponents/stdThead/StdThead";
import { StdTbody } from "./stdComponents/stdTbody/StdTbody";

export const Students: FC = () => {
  return (
    <div className="students">
      <LessonTitle title="Իմ դասընթացները" className="w-full justify-between" />
      <div className="flex flex-col gap-3">
        <div className="filterSection">
          <div className="filterBox">Ավարտած</div>
          <div className="filterBox">Սովորող</div>
          <CustomDropdown
            className="filterBox"
            select={{ title: "Ըստ դասընթացի", options: ["adsf"] }}
          />
        </div>
        <div className="tableSection">
          <table>
            <StdThead />
            <StdTbody />
          </table>
        </div>
      </div>
    </div>
  );
};
