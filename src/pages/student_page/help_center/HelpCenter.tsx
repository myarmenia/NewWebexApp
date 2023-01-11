import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CstmInput, CstmTextarea, CustomBtn } from "../../../components/forms";
import { LessonTitle } from "../../../components/reusable";
import { helpCenter_schema } from "../../../validations/helpCenter_schema";
import "./helpCenter.css";

interface IHelpCenter {
  term: string;
  message: string;
}
const HelpCenter: React.FC = () => {
  const methods = useForm<IHelpCenter>({
    resolver: yupResolver(helpCenter_schema),
  });
  const { handleSubmit } = methods;
  const onSubmit = (data: IHelpCenter) => {
    console.log(data);
  };
  return (
    <div>
      <LessonTitle title="Աջակցության կենտրոն" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="helpCenter">
          <CstmInput placeholder="Թեմա" regName="term" />
          <CstmTextarea placeholder="Նամակ" regName="message" />
          <CustomBtn title="Ուղարկել" type="submit" />
        </form>
      </FormProvider>
    </div>
  );
};

export default HelpCenter;
