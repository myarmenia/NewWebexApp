import React from "react";
import styles from "./finishExam.module.css";
import { useFormContext } from "react-hook-form";

interface FinishExamProps {
  text: string;
  regName: string;
}

export const FinishExam: React.FC<FinishExamProps> = ({ text, regName }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles.mycontainer}>
      <span className="text-gray text-xs">{text}</span>
      <div className={styles.content}>
        <div className={styles.box}>
          <input type="radio" {...register(regName)} value={"Այո"} />
          <span>Այո</span>
        </div>
        <div className={styles.box}>
          <input type="radio" {...register(regName)} value={"Ոչ"} />
          <span>Ոչ</span>
        </div>
        <p className="errorMessage">{errors[regName]?.message?.toString()}</p>
      </div>
    </div>
  );
};
