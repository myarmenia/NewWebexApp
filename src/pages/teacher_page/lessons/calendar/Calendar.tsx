import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LessonTitle } from "../../../../components/reusable/lessonTitle/LessonTitle";
import { ICalendarReducer } from "../../../../models/interfaces";
import {
  createDates,
  createDatesWeek
} from "../../../../redux/reducers/calendarList";
import { instance } from "../../../../request/request";
import { DayCont } from "./calenComponents/dayCont/DayCont";
import { TdNumCont } from "./calenComponents/tdNumCont/TdNumCont";
import "./calendar.css";
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
  const res = await instance.get("/posts?userId=1");
  return { user: res.data };
};
