import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { LessonTitle } from "../../../../components/reusable/lessonTitle/LessonTitle";
import "./createGraffic.css";
import { InputTime } from "./InputTime";
export interface IInputTimeProps {
  start: Date | string;
  end: Date | string;
}
export interface UserSubmitForm2 {
  monday?: IInputTimeProps[];
  // tuesday?: IInputTimeProps[];
  // thursday?: IInputTimeProps[];
  // wednesday?: IInputTimeProps[];
  // friday?: IInputTimeProps[];
  // saturday?: IInputTimeProps[];
  // sunday?: IInputTimeProps[];
}
console.log(new Date().toLocaleTimeString());
const SchemaChild = Yup.array().of(
  Yup.object().shape({
    start: Yup.date().max(new Date(), "Future date not allowed"),
    end: Yup.date().when(
      "start",
      (start, Yup) =>
        start && Yup.min(start, "End time cannot be before start time")
    ),
  })
);
const Schema = Yup.object().shape({
  monday: SchemaChild,
  // wednesday: SchemaChild,
  // thursday: SchemaChild,
  // friday: SchemaChild,
  // saturday: SchemaChild,
  // sunday: SchemaChild,
});
export const CreateGraffic: FC = () => {
  const methods = useForm<UserSubmitForm2>({
    resolver: yupResolver(Schema),
    defaultValues: {
      monday: [
        {
          start: new Date(),
          end: new Date(),
        },
      ],
      // tuesday: [{ start: new Date(), end: new Date() }],
      // wednesday: [{ start: new Date(), end: new Date() }],
      // thursday: [{ start: new Date(), end: new Date() }],
      // friday: [{ start: new Date(), end: new Date() }],
      // saturday: [{ start: new Date(), end: new Date() }],
      // sunday: [{ start: new Date(), end: new Date() }],
    },
  });
  const { handleSubmit, control, register, watch } = methods;
  const monday = useFieldArray({
    control,
    name: "monday",
  });
  // const tuesday = useFieldArray({
  //   control,
  //   name: "tuesday",
  // });
  // const wednesday = useFieldArray({
  //   control,
  //   name: "wednesday",
  // });
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
      <LessonTitle title="???????????? ?????????????????????? ????????????" />
      <div className="createGraffic ">
        <form className="grafficChild" onSubmit={handleSubmit(onSubmit)}>
          <InputTime
            day="????????????????????"
            regName="monday"
            fieldArray={monday}
            count={watch("monday")?.length || 1}
          />
          {/*<InputTime
            day="??????????????????"
            regName="tuesday"
            fieldArray={tuesday}
            count={watch("tuesday")?.length || 1}
          />
         <InputTime
            day="????????????????????"
            regName="wednesday"
            fieldArray={wednesday}
            count={watch("wednesday")?.length || 1}
          />
          <InputTime
            day="??????????????????"
            regName="thursday"
            fieldArray={thursday}
            count={watch("thursday")?.length || 1}
          />
          <InputTime
            day="????????????"
            regName="friday"
            fieldArray={friday}
            count={watch("friday")?.length || 1}
          />
          <InputTime
            day="??????????"
            regName="saturday"
            fieldArray={saturday}
            count={watch("saturday")?.length || 1}
          />
          <InputTime
            day="????????????"
            regName="sunday"
            fieldArray={sunday}
            count={watch("sunday")?.length || 1}
          /> */}
          {/* <Link to={"edit_graffic"}> */}
          <button type="submit" className="save">
            ????????????????
          </button>
          {/* </Link> */}
        </form>
      </div>
    </FormProvider>
  );
};
