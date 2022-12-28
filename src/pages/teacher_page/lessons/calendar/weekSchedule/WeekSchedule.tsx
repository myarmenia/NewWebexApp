import React, { FC } from "react";
import { LessonTitle } from "../../../../../components/reusable/lessonTitle/LessonTitle";
import "./weekSchedule.css";
import { WkTbody } from "./wkTbody/WkTbody";
import { WkThead } from "./wkThead/WkThead";

export const WeekSchedule: FC = () => {
  return (
    <div className="weekSchedule">
      <LessonTitle title="Դասավանդման գրաֆիկ" />
      <p className="text-gray mb-2 -mt-3">December 25-31</p>
      <div className="weekSchedule_container">
        <table className="weekSchTable">
          <WkThead />
          <WkTbody />
        </table>
      </div>
    </div>
  );
};
