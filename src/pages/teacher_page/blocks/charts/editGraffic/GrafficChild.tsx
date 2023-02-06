import { FC } from "react";
import { IStartEnd } from "./EditGraffic";
import styles from "./editGraffic.module.css";
interface IGrafficChild {
  weekDay: string;
  times: IStartEnd[];
}

const GrafficChild: FC<IGrafficChild> = ({ times, weekDay }) => {
  return (
    <div className={styles.grafficContainer}>
      <p className={styles.day}>{weekDay}</p>
      <div className={styles.editTime}>
        {times?.map((el, index) => (
          <div key={index}>{`${el.start} - ${el.end}`}</div>
        ))}
      </div>
    </div>
  );
};

export default GrafficChild;
