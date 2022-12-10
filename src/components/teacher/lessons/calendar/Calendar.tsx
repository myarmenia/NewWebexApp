import React, { FC, useEffect } from "react";
import "./calendar.css";
import { LessonTitle } from "../../lessonTitle/LessonTitle";
import { TdNumCont } from "./calenComponents/tdNumCont/TdNumCont";
import { DayCont } from "./calenComponents/dayCont/DayCont";
import { ICalendarReducer } from "../../../../models/interfaces";
import { useDispatch, useSelector } from "react-redux";
import {
  createDates,
  createDatesWeek,
} from "../../../../redux/reducers/calendarList";
export const Calendar: FC = () => {
  const { currentDate } = useSelector(
    (state: ICalendarReducer) => state.calendarList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createDates());
    dispatch(createDatesWeek());
  }, [currentDate.getMonth()]);

  return (
    <div className="calendar">
      <LessonTitle title="Դասավանդման գրաֆիկ" />
      <div id="CalendarBody">
        <div id="CalendarBodyContainer">
          <TdNumCont />
          <div className="fullHR" />
          <DayCont />
        </div>
      </div>
    </div>
  );
};
