import { FC } from "react";
import { IDateDay } from "../../../../../../../models/interfaces";
import styles from "./tdBox.module.css";

interface TdBoxProps extends IDateDay {
  className?: string;
}

export const TdBox: FC<TdBoxProps> = ({
  date,
  currentDayEvents,
  className = "",
  isCurrentMonth,
}) => {
  return (
    <td className={`${styles.td} ${className}`}>
      <div
        className={`${styles.content} ${!isCurrentMonth ? "opacity-40" : ""}`}
      >
        {date?.getDate()}
      </div>
      <div className={styles.events}>
        {currentDayEvents?.map(({ time }) => (
          <div className={styles.box} key={Math.random()}>
            <div>Դասընթաց</div>
            <div>{time}</div>
          </div>
        ))}
      </div>
    </td>
  );
};
