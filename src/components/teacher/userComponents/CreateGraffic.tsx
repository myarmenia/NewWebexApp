import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { LessonTitle } from "../lessonTitle/LessonTitle";
import "./createGraffic.css";
import InputTime from "./InputTime";
import * as Yup from "yup";
import Input from "../../sherid/Input";
interface YupProps {
  start: string;
  end: string;
}
export interface UserSubmitForm2 {
  monday?: YupProps[];
  tuesday?: YupProps[];
  thursday?: YupProps[];
  wednesday?: YupProps[];
  friday?: YupProps[];
  saturday?: YupProps[];
  sunday?: YupProps[];
}
const CreateGraffic: React.FC = () => {
  const methods = useForm<UserSubmitForm2>({
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
  const { register, handleSubmit, control } = methods;
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
  const thursday = useFieldArray({
    control,
    name: "thursday",
  });
  const friday = useFieldArray({
    control,
    name: "friday",
  });
  const saturday = useFieldArray({
    control,
    name: "saturday",
  });
  const sunday = useFieldArray({
    control,
    name: "sunday",
  });

  const onSubmit = (data: UserSubmitForm2) => console.log("data", data);
  return (
    <FormProvider {...methods}>
      <LessonTitle title="Կազմել դասավանդման գրաֆիկ" />
      <div className="createGraffic">
        <form className="grafficChild" onSubmit={handleSubmit(onSubmit)}>
          <InputTime day="Երկուշաբթի" regName="monday" fieldArray={monday} />
          <InputTime day="Երեքշաբթի" regName="tuesday" fieldArray={tuesday} />
          <InputTime
            day="Չորեքշաբթի"
            regName="wednesday"
            fieldArray={wednesday}
          />
          <InputTime day="Հինգշաբթի" regName="thursday" fieldArray={thursday} />
          <InputTime day="Ուրբաթ" regName="friday" fieldArray={friday} />
          <InputTime day="Շաբաթ" regName="saturday" fieldArray={saturday} />
          <InputTime day="Կիրակի" regName="sunday" fieldArray={sunday} />
          <button type="submit" className="save">
            Պահպանել
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

export default CreateGraffic;
