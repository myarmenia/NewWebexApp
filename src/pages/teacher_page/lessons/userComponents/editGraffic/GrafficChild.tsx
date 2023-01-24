import React from "react";
import styles from "./editGraffic.module.css";
interface GrafficChild {
  weekDay: string;
  times: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >[];
}

const GrafficChild: React.FC<GrafficChild> = ({ weekDay, times }) => {
  return (
    <div className={styles.grafficContainer}>
      <p className={styles.day}>{weekDay}</p>
      <div className={styles.editTime}>
        <>{times}</>
      </div>
    </div>
  );
};

export default GrafficChild;
