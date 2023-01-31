import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { CustomRadio } from "../../../../../../components/forms";
import { ErrorMessage } from "../../../../../../components/reusable";
import styles from "./finishExam.module.css";

interface FinishExamProps {
  text: string;
  regName: string;
}

export const FinishExam: FC<FinishExamProps> = ({ text, regName }) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles.mycontainer}>
      <span className="text-gray text-xs">{text}</span>
      <div className={styles.content}>
        <CustomRadio {...{ regName }} value={"Այո"} label="Այո" error=" " />
        <CustomRadio {...{ regName }} value={"Ոչ"} label="Ոչ" error=" " />
        <ErrorMessage>{errors[regName]?.message?.toString()}</ErrorMessage>
      </div>
    </div>
  );
};
