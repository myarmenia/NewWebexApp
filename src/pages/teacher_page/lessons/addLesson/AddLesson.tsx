import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CustomBtn } from "../../../../components/forms";
import styles from "./addLesson.module.css";

export const AddLesson: FC = () => {
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
