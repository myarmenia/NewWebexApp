import { FC, useEffect } from "react";
import "./calendar.css";
import { LessonTitle } from "../../../../components/reusable";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  createDates,
  createDatesWeek,
} from "../../../../redux/reducers/calendarList";
import { instance } from "../../../../request";
import { DayCont } from "./calenComponents/dayCont/DayCont";
import { TdNumCont } from "./calenComponents/tdNumCont/TdNumCont";

export const Calendar: FC = () => {
  const { currentDate } = useAppSelector((state) => state.calendarList);
  const myCurrentDate = currentDate.getMonth();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(createDates());
    dispatch(createDatesWeek());
  }, [myCurrentDate, dispatch]);

  return (
    <div className="calendar">
      <LessonTitle title="Դասավանդման գրաֆիկ" />
      <div id="calendarBody">
        <div id="calendarBodyContainer">
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
