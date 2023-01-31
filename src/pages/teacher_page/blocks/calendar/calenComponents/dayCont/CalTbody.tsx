import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import { TdBox } from "./tdBox/TdBox";
import styles from "./dayCont.module.css";

export const CalTbody: FC = () => {
  const { datesWeek } = useAppSelector((state) => state.calendarList);
  return (
    <tbody>
      {datesWeek.map((week) => (
        <tr className={styles.tr} key={Math.random()}>
          {week.map((day) => (
            <TdBox {...day} key={Math.random()} />
          ))}
        </tr>
      ))}
    </tbody>
  );
};
