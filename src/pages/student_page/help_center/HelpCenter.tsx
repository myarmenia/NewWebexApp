import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CstmInput } from "../../../components/forms";
import { CstmTextarea } from "../../../components/forms";
import { CustomBtn } from "../../../components/forms";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./helpCenter.css";
import { LessonTitle } from "../../../components/reusable";
interface IHelpCenter {
  term: string;
  message: string;
}
const helpCenterValdiation = Yup.object().shape({
  term: Yup.string().required("Լրացնելը պարտադիր է"),
  message: Yup.string().required("Լրացնելը պարտադիր է"),
});
const HelpCenter: React.FC = () => {
  const methods = useForm<IHelpCenter>({
    resolver: yupResolver(helpCenterValdiation),
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
          <CstmInput type="text" placeholder="Թեմա" regName="term" />
          <CstmTextarea placeholder="Նամակ" regName="message" />
          <CustomBtn title="Ուղարկել" type="submit" />
        </form>
      </FormProvider>
    </div>
  );
};

export default HelpCenter;
