import { FC, useEffect } from "react";
import { LoaderFunction } from "react-router";
import { LessonTitle } from "../../../../components/reusable";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  createDates,
  combineDates,
} from "../../../../redux/reducers/calendarList";
import { instance } from "../../../../request";
import { DayCont } from "./calenComponents/dayCont/DayCont";
import { NumCont } from "./calenComponents/numCont/NumCont";
import styles from "./calendar.module.css";

export const Calendar: FC = () => {
  const { currentDate } = useAppSelector((state) => state.calendarList);
  const myCurrentDate = currentDate.getMonth();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(createDates());
    dispatch(combineDates());
  }, [myCurrentDate, dispatch]);

  return (
    <div>
      <LessonTitle title="Դասավանդման գրաֆիկ" />
      <div className={styles.mycontainer}>
        <div className={styles.content}>
          <NumCont />
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
