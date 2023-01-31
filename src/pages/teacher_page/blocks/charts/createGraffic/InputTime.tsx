import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import deleteIcon from "../../../../../assets/teacher_images/createGraffic/delete.svg";
import { CstmTimeInput } from "../../../../../components/forms";
import { ErrorMessage } from "../../../../../components/reusable";
import { weekDays_long } from "../../../../../helper";
import { CreateGraficForm } from "../../../../../validations/createGrafic_schema";
import { useError } from "../../../../../hooks";
import styles from "./createGraffic.module.css";

interface InputProps {
  day: typeof weekDays_long[number];
  className?: string;
  placholder?: string;
  name: keyof CreateGraficForm;
}

export const InputTime: FC<InputProps> = ({ day, name }) => {
  const { control } = useFormContext<CreateGraficForm>();
  const { append, fields, remove } = useFieldArray<CreateGraficForm>({
    name,
    control,
  });

  return (
    <div className={styles.graffics}>
      <p className={styles.grafficsDay}>{day}</p>
      <div className={styles.grafficInput}>
        {fields.map(({ id }, index) => (
          <InputsBox {...{ index, name, remove }} key={id} />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className="add"
          type="button"
          onClick={() => {
            append({ start: "", end: "" });
          }}
        >
          <img src={buttonImg} />
        </button>
        <div className={styles.addText}>ավելացնել տարբերակ</div>
      </div>
    </div>
  );
};

interface InputsBoxProps extends Pick<InputProps, "name"> {
  remove: (index?: number | number[] | undefined) => void;
  index: number;
}

const InputsBox: FC<InputsBoxProps> = ({ name, remove, index }) => {
  const error = useError(`${name}.${index}.end`);
  return (
    <div className="relative">
      <div className={styles.grafficInputChild}>
        <CstmTimeInput regName={`${name}.${index}.start`} error=" " />
        <div className="bg-[#CCCCCC] w-2 h-[1px]" />
        <CstmTimeInput regName={`${name}.${index}.end`} error=" " />
        <img
          src={deleteIcon}
          className="shrink-0 cursor-pointer w-5 h-10 ml-2"
          onClick={() => remove(index)}
        />
      </div>
      <ErrorMessage className="!bottom-[-14px]">{error}</ErrorMessage>
    </div>
  );
};
