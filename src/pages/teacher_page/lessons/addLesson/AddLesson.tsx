import React, { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CustomBtn } from "../../../../components/forms";
import styles from "./addLesson.module.css";

export const AddLesson: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.box}>
      <p className={styles.message}>Դուք դեռ չունեք դասընթաց, ավելացրեք նորը</p>
      <CustomBtn
        title="Ավելացնել դասընթաց"
        onClick={() => navigate("new_lesson")}
      />
    </div>
  );
};
