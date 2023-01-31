import { FC } from "react";
import styles from "./weekSchedule.module.css";
import { LessonTitle } from "../../../../components/reusable";
import { getCurrentWeekStartToEnd } from "../../../../helper";
import { useAppSelector } from "../../../../hooks";
import { WkTbody } from "./WkTbody";
import { WkThead } from "./WkThead";

export const WeekSchedule: FC = () => {
  const { chosenDay } = useAppSelector((state) => state.calendarList);
  const date = getCurrentWeekStartToEnd(chosenDay);
  return (
    <div className={styles.mainContainer}>
      <LessonTitle title="Դասավանդման գրաֆիկ" />
      <p className="text-gray mb-2 -mt-3">{date}</p>
      <div className={styles.mycontainer}>
        <table className={styles.table}>
          <WkThead />
          <WkTbody />
        </table>
      </div>
    </div>
  );
};
