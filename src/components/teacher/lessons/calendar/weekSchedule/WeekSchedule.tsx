import React, { FC } from "react";
import "./weekSchedule.css";
import { LessonTitle } from "../../../lessonTitle/LessonTitle";
import { WkTbody } from "./wkTbody/WkTbody";
import { WkThead } from "./wkThead/WkThead";

export const WeekSchedule: FC = () => {
  return (
    <div className="weekSchedule">
      <LessonTitle title="Դասավանդման գրաֆիկ" />
      <div className="weekSchedule_container">
        {/* <div className="my_background_04" /> */}
        <table className="weekSchTable">
          <WkThead />
          <WkTbody />
        </table>
      </div>
    </div>
  );
};
