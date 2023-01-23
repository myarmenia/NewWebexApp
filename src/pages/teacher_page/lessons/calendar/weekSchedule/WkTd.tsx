import { FC, ReactNode } from "react";
import { IWeekEvent } from "../../../../../models/interfaces";
import styles from "./weekSchedule.module.css";

interface WkTdProps {
  event?: IWeekEvent;
  children?: ReactNode;
}

export const WkTd: FC<WkTdProps> = ({ event, children }) => {
  return (
    <td className={styles.td} key={Math.random()}>
      {event && (
        <div
          className={styles.event}
          style={{
            height: event?.lessonDuration! * 43 - 10 + "px",
          }}
        >
          <p>{event?.title}</p>
        </div>
      )}
      {children}
    </td>
  );
};
