import React, { FC, useEffect } from "react";
import "./calendar.css";
import { LessonTitle } from "../../lessonTitle/LessonTitle";
import { TdNumCont } from "./calenComponents/tdNumCont/TdNumCont";
import { DayCont } from "./calenComponents/dayCont/DayCont";
import { ICalendarReducer, IDataExample } from "../../../../models/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router";
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

  const { user } = useLoaderData() as IDataExample;
  console.log(user, "works");
  return (
    <div className="calendar">
      <LessonTitle title="Դասավանդման գրաֆիկ" />
      <div id="CalendarBody">
        <div className="my_background_04" />
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
