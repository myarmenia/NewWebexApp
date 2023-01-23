import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import { TdBox } from "./tdBox/TdBox";
import styles from "./dayCont.module.css";

interface CalTbodyProps {}

export const CalTbody: FC<CalTbodyProps> = ({}) => {
  const { datesWeek } = useAppSelector((state) => state.calendarList);
  return (
    <tbody>
      {datesWeek.map((week, ind) => {
        return (
          <tr className={styles.tr} key={Math.random()}>
            {week.map((day, i) => (
              <TdBox {...day} key={Math.random()} />
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};
