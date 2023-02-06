import React from "react";
import user from "../../../../../assets/teacher_images/controlPanel/user.svg";
import star from "../../../../../assets/teacher_images/controlPanel/star.svg";
import styles from "./panelChild.module.css";
interface PanelDataProps {
  title: string;
  isActiv?: boolean;
}
const PersonalData: React.FC<PanelDataProps> = ({ title }) => {
  return (
    <div className={styles.panelContainer}>
      <div className={styles.title}>{title}</div>
      <div className={styles.panelData}>
        <img src={user} className={styles.panelDataImg} alt="" />
        <div className={styles.stars}>
          <img src={star} className={styles.star} alt="" />
          <img src={star} className={styles.star} alt="" />
          <img src={star} className={styles.star} alt="" />
          <img src={star} className={styles.star} alt="" />
          <img src={star} className={styles.star} alt="" />
          <div className={styles.count}>(25)</div>
        </div>
      </div>

      <div className="panelData2">
        <div className="panelDataText">Պահանջված</div>
      </div>
    </div>
  );
};

export default PersonalData;
