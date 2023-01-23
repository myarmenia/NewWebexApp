import { FC, useEffect } from "react";
import styles from "./calendar.module.css";
import { LessonTitle } from "../../../../components/reusable";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  createDates,
  createDatesWeek,
} from "../../../../redux/reducers/calendarList";
import { instance } from "../../../../request";
import { DayCont } from "./calenComponents/dayCont/DayCont";
import { TdNumCont } from "./calenComponents/tdNumCont/TdNumCont";
import { LoaderFunction } from "react-router";

export const Calendar: FC = () => {
  const { currentDate } = useAppSelector((state) => state.calendarList);
  const myCurrentDate = currentDate.getMonth();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(createDates());
    dispatch(createDatesWeek());
  }, [myCurrentDate, dispatch]);

  return (
    <div>
      <LessonTitle title="Դասավանդման գրաֆիկ" />
      <div className={styles.mycontainer}>
        <div className={styles.content}>
          <TdNumCont />
          <div className={styles.hr} />
          <DayCont />
        </div>
      </div>
    </div>
  );
};

export const calendarLoader: LoaderFunction = async () => {
  const res = await instance.get("/posts?userId=1");
  return { user: res.data };
};
