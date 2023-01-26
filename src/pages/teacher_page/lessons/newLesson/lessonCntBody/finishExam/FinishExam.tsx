import React from "react";
import styles from "./finishExam.module.css";
import { useFormContext } from "react-hook-form";
import { CustomRadio } from "../../../../../../components/forms";
import { ErrorMessage } from "../../../../../../components/reusable";

interface FinishExamProps {
  text: string;
  regName: string;
}

export const FinishExam: React.FC<FinishExamProps> = ({ text, regName }) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles.mycontainer}>
      <span className="text-gray text-xs">{text}</span>
      <div className={styles.content}>
        <CustomRadio {...{ regName }} value={"Այո"} label="Այո" />
        <CustomRadio {...{ regName }} value={"Ոչ"} label="Ոչ" />
        <ErrorMessage>{errors[regName]?.message?.toString()}</ErrorMessage>
      </div>
    </div>
  );
};
