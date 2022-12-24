import React, { FC } from "react";
import { LessonTitle } from "../../../../../components/screenComponents/lessonTitle/LessonTitle";
import "./weekSchedule.css";
import { WkTbody } from "./wkTbody/WkTbody";
import { WkThead } from "./wkThead/WkThead";

export const WeekSchedule: FC = () => {
  return (
    <div className="weekSchedule">
      <LessonTitle title="Դասավանդման գրաֆիկ" />
      <div className="weekSchedule_container">
        <table className="weekSchTable">
          <WkThead />
          <WkTbody />
        </table>
      </div>
    </div>
  );
};
