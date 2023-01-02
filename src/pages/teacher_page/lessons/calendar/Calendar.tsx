import { FC, useEffect } from "react";
import { LessonTitle } from "../../../../components/reusable";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  createDates,
  createDatesWeek,
} from "../../../../redux/reducers/calendarList";
import { instance } from "../../../../request/request";
import { DayCont } from "./calenComponents/dayCont/DayCont";
import { TdNumCont } from "./calenComponents/tdNumCont/TdNumCont";
import "./calendar.css";
export const Calendar: FC = () => {
  const { currentDate } = useAppSelector((state) => state.calendarList);
  const dispatch = useAppDispatch();

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
