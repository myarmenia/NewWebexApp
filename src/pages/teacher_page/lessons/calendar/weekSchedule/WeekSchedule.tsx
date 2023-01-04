import { FC } from "react";
import "./weekSchedule.css";
import { LessonTitle } from "../../../../../components/reusable";
import { getCurrentWeekStartToEnd } from "../../../../../helper";
import { useAppSelector } from "../../../../../hooks";
import { WkTbody } from "./wkTbody/WkTbody";
import { WkThead } from "./wkThead/WkThead";

export const WeekSchedule: FC = () => {
  const { chosenDay } = useAppSelector((state) => state.calendarList);
  const date = getCurrentWeekStartToEnd(chosenDay);
  return (
    <div className="weekSchedule">
      <LessonTitle title="Դասավանդման գրաֆիկ" />
      <p className="text-gray mb-2 -mt-3">{date}</p>
      <div className="weekSchedule_container">
        <table className="weekSchTable">
          <WkThead />
          <WkTbody />
        </table>
      </div>
    </div>
  );
};
