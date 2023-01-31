import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CustomBtn } from "../../../../../components/forms";
import { LessonTitle } from "../../../../../components/reusable/lessonTitle/LessonTitle";
import { weekDays_long } from "../../../../../helper";
import {
  CreateGraficForm,
  createGrafic_schema,
} from "../../../../../validations/createGrafic_schema";
import styles from "./createGraffic.module.css";
import { InputTime } from "./InputTime";

export const CreateGraffic: FC = () => {
  const methods = useForm<CreateGraficForm>({
    resolver: yupResolver(createGrafic_schema),
    defaultValues: {
      monday: [{ start: "", end: "" }],
      tuesday: [{ start: "", end: "" }],
      wednesday: [{ start: "", end: "" }],
      thursday: [{ start: "", end: "" }],
      friday: [{ start: "", end: "" }],
      saturday: [{ start: "", end: "" }],
      sunday: [{ start: "", end: "" }],
    },
  });
  const { handleSubmit } = methods;
  const onSubmit = (data: CreateGraficForm) => console.log(data, "data");

  return (
    <FormProvider {...methods}>
      <LessonTitle title="Կազմել դասավանդման գրաֆիկ" />
      <div className={styles.createGraffic}>
        <form
          className={styles.grafficChild}
          onSubmit={handleSubmit(onSubmit)}
          action=""
        >
          {Object.keys(createGrafic_schema.fields).map((el, i) => (
            <InputTime
              day={weekDays_long[i]}
              name={el as keyof CreateGraficForm}
              key={i}
            />
          ))}

          {/* <Link to={"edit_graffic"}> */}
          <CustomBtn title="Պահպանել" type="submit" />
          {/* </Link> */}
        </form>
      </div>
    </FormProvider>
  );
};
