import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { CustomBtn } from "../../../../components/forms";
import { LessonTitle } from "../../../../components/reusable/lessonTitle/LessonTitle";
import styles from "./createGraffic.module.css";
import { InputTime } from "./InputTime";

export interface IInputTimeProps {
  start: Date | string;
  end: Date | string;
}
export interface UserSubmitForm2 {
  monday?: IInputTimeProps[];
  tuesday?: IInputTimeProps[];
  wednesday?: IInputTimeProps[];
  // thursday?: IInputTimeProps[];
  // friday?: IInputTimeProps[];
  // saturday?: IInputTimeProps[];
  // sunday?: IInputTimeProps[];
}

const SchemaChild = Yup.array()
  .of(
    Yup.object().shape({
      start: Yup.date()
        .max(new Date(), "Future date not allowed")
        .required("some error"),
      end: Yup.date()
        .when(
          "start",
          (start, Yup) =>
            start && Yup.min(start, "End time cannot be before start time")
        )
        .required("some error"),
    })
  )
  .required("error");
const Schema = Yup.object().shape({
  monday: SchemaChild,
  tuesday: SchemaChild,
  wednesday: SchemaChild,
  // thursday: SchemaChild,
  // friday: SchemaChild,
  // saturday: SchemaChild,
  // sunday: SchemaChild,
});
export const CreateGraffic: FC = () => {
  const methods = useForm<UserSubmitForm2>({
    resolver: yupResolver(Schema),
    defaultValues: {
      monday: [{ start: "", end: "" }],
      tuesday: [{ start: "", end: "" }],
      wednesday: [{ start: "", end: "" }],
      // wednesday: [{ start: new Date(), end: new Date() }],
      // thursday: [{ start: new Date(), end: new Date() }],
      // friday: [{ start: new Date(), end: new Date() }],
      // saturday: [{ start: new Date(), end: new Date() }],
      // sunday: [{ start: new Date(), end: new Date() }],
    },
  });
  const { handleSubmit, control, watch } = methods;
  const monday = useFieldArray({
    control,
    name: "monday",
  });
  const tuesday = useFieldArray({
    control,
    name: "tuesday",
  });
  const wednesday = useFieldArray({
    control,
    name: "wednesday",
  });
  // const thursday = useFieldArray({
  //   control,
  //   name: "thursday",
  // });
  // const friday = useFieldArray({
  //   control,
  //   name: "friday",
  // });
  // const saturday = useFieldArray({
  //   control,
  //   name: "saturday",
  // });
  // const sunday = useFieldArray({
  //   control,
  //   name: "sunday",
  // });;
  const onSubmit = (data: UserSubmitForm2) => console.log(data, "data");

  return (
    <FormProvider {...methods}>
      <LessonTitle title="Կազմել դասավանդման գրաֆիկ" />
      <div className={styles.createGraffic}>
        <form
          className={styles.grafficChild}
          onSubmit={handleSubmit(onSubmit)}
          action=""
        >
          <InputTime
            day="Երկուշաբթի"
            regName="monday"
            // fieldArray={monday}
            {...monday}
            count={watch("monday")?.length || 1}
          />
          <InputTime
            day="Երեքշաբթի"
            regName="tuesday"
            // fieldArray={tuesday}
            {...tuesday}
            count={watch("tuesday")?.length || 1}
          />
          <InputTime
            day="Չորեքշաբթի"
            regName="wednesday"
            // fieldArray={wednesday}
            {...wednesday}
            count={watch("wednesday")?.length || 1}
          />
          {/*  <InputTime
            day="Հինգշաբթի"
            regName="thursday"
            fieldArray={thursday}
            count={watch("thursday")?.length || 1}
          />
          <InputTime
            day="Ուրբաթ"
            regName="friday"
            fieldArray={friday}
            count={watch("friday")?.length || 1}
          />
          <InputTime
            day="Շաբաթ"
            regName="saturday"
            fieldArray={saturday}
            count={watch("saturday")?.length || 1}
          />
          <InputTime
            day="Կիրակի"
            regName="sunday"
            fieldArray={sunday}
            count={watch("sunday")?.length || 1}
          /> */}
          {/* <Link to={"edit_graffic"}> */}
          <CustomBtn title="Պահպանել" type="submit" />
          {/* </Link> */}
        </form>
      </div>
    </FormProvider>
  );
};
