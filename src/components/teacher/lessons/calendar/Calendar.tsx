import React, { FC, useState } from "react";
import "./calendar.css";
import { useCreateCalendar } from "./customHooks/dates";
import arrowImg from "../../../../images/Teacher/Calendar/arrowLeft.svg";
import { LessonTitle } from "../../lessonTitle/LessonTitle";
import { TdNumCont } from "./calenComponents/tdNumCont/TdNumCont";
import filterImg from "../../../../images/Teacher/Calendar/filterImg.svg";
import { DayCont } from "./calenComponents/dayCont/DayCont";

export interface IDateDay {
  dayNumber: number;
  isActive?: boolean;
  notCurrentMonth?: boolean;
  currentDayEvents?: {
    evName?: string;
    time: string;
  }[];
}

export const Calendar: FC = () => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const currentDate = new Date(currentYear, currentMonth, new Date().getDate());
  const dates = useCreateCalendar(currentYear, currentMonth);
  let weeksInMonth = dates.length / 7;

  let vari = 0;
  const datesWeek: IDateDay[][] = [];
  for (let b = 0; b < dates.length / 7; b++) {
    const some: IDateDay[] = [];
    for (let b = 0; b < dates.length / weeksInMonth; b++) {
      some.push(dates[vari]);
      vari++;
    }
    datesWeek.push(some);
  }
  return (
    <div className="calendar">
      <LessonTitle title="Դասավանդման գրաֆիկ" />
      <div id="CalendarBody">
        <div id="CalendarBodyContainer">
          <TdNumCont {...{ datesWeek }} />
          <div className="fullHR" />
          <DayCont {...{ currentDate, datesWeek }} />
        </div>
      </div>
    </div>
  );
};
