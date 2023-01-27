import { FC } from "react";
import { IStartEnd } from "./EditGraffic";
import styles from "./editGraffic.module.css";
interface GrafficChild {
  weekDay: string;
  times: IStartEnd[];
}

const GrafficChild: FC<GrafficChild> = ({ times, weekDay }) => {
  return (
    <div className={styles.grafficContainer}>
      <p className={styles.day}>{weekDay}</p>
      <div className={styles.editTime}>
        {times?.map((el, index) => {
          return <div key={index}>{`${el.start} - ${el.end}`}</div>;
        })}
      </div>
    </div>
  );
};

export default GrafficChild;
