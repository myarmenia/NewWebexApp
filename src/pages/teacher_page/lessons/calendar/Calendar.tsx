import React, { FC, useEffect } from "react";
import "./calendar.css";
import { TdNumCont } from "./calenComponents/tdNumCont/TdNumCont";
import { DayCont } from "./calenComponents/dayCont/DayCont";
import { ICalendarReducer } from "../../../../models/interfaces";
import { useDispatch, useSelector } from "react-redux";
import {
  createDates,
  createDatesWeek,
} from "../../../../redux/reducers/calendarList";
import { LessonTitle } from "../../../../components/screenComponents/lessonTitle/LessonTitle";
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

export const calendarLoader = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  const user = await res.json();
  return { user };
};
