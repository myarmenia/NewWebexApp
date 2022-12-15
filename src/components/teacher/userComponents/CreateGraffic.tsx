import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { LessonTitle } from "../lessonTitle/LessonTitle";
import "./createGraffic.css";
import InputTime from "./InputTime";
import * as Yup from "yup";
import Input from "../../sherid/Input";
import { isErrored } from "stream";
import { format } from "path";
import { Link } from "react-router-dom";
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
const SchemaChild = Yup.array().of(
  Yup.object().shape({
    start: Yup.string(),
    end: Yup.string(),
  })
);
const Schema = Yup.object().shape({
  monday: SchemaChild,
  wednesday: SchemaChild,
  thursday: SchemaChild,
  friday: SchemaChild,
  saturday: SchemaChild,
  sunday: SchemaChild,
});
const CreateGraffic: React.FC = () => {
  const methods = useForm<UserSubmitForm2>({
    resolver: yupResolver(Schema),
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
  const { handleSubmit, control, register, watch } = methods;
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
  const onSubmit = (data: UserSubmitForm2) => console.log(data, "data");
  return (
    <FormProvider {...methods}>
      <LessonTitle title="Կազմել դասավանդման գրաֆիկ" />
      <div className="createGraffic ">
        <div className="my_background_04" />
        <form className="grafficChild" onSubmit={handleSubmit(onSubmit)}>
          <InputTime
            day="Երկուշաբթի"
            regName="monday"
            fieldArray={monday}
            count={watch("monday")?.length || 1}
          />
          <InputTime
            day="Երեքշաբթի"
            regName="tuesday"
            fieldArray={tuesday}
            count={watch("tuesday")?.length || 1}
          />
          <InputTime
            day="Չորեքշաբթի"
            regName="wednesday"
            fieldArray={wednesday}
            count={watch("wednesday")?.length || 1}
          />
          <InputTime
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
          />
          <Link to={"edit_graffic"}>
            <button type="submit" className="save">
              Պահպանել
            </button>
          </Link>
        </form>
      </div>
    </FormProvider>
  );
};

export default CreateGraffic;
