import React from "react";
import lessongraffic from "../../../../../assets/teacher_images/controlPanel/lessongraffic.svg";
import styles from "./panelChild.module.css";
export const SecondPanel = () => {
  return (
    <div className={styles.secondPanel}>
      <div className={styles.secondPanelChild}>
        <div className={styles.secondPanelDate}>22/12/2022</div>
        <img src={lessongraffic} className={styles.secondPanelImg} />
      </div>
      <div className={styles.secondPanelChild2}>
        <div className={styles.number}>10</div>
      </div>
      <div className={styles.secondPanelChild3}>
        <div className={styles.firstPanelText2}>Պահանջված</div>
      </div>
    </div>
  );
};
