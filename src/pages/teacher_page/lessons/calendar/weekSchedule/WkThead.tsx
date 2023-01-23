import { FC } from "react";
import { weekDays_long } from "../../../../../helper";
import styles from "./weekSchedule.module.css";

export const WkThead: FC = () => {
  return (
    <thead>
      <tr>
        <th className={styles.th}></th>
        {weekDays_long.map((el) => (
          <th className={styles.th} key={Math.random()}>
            {el}
          </th>
        ))}
      </tr>
    </thead>
  );
};
