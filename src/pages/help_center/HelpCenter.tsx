import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ActionFunction } from "react-router";
import { useFormAction } from "react-router-dom";
import { CstmInput, CstmTextarea, CustomBtn } from "../../components/forms";
import { LessonTitle } from "../../components/reusable";
import { toFormData, toObject } from "../../helper";
import { useAppSubmit } from "../../hooks";
import { helpCenter_schema } from "../../validations/helpCenter_schema";
import styles from "./helpCenter.module.css";

interface IHelpCenter {
  term: string;
  message: string;
}

const HelpCenterComp: FC = () => {
  const methods = useForm<IHelpCenter>({
    resolver: yupResolver(helpCenter_schema),
  });
  const { handleSubmit } = methods;

  const submit = useAppSubmit();
  const actionPath = useFormAction();

  const onSubmit = (data: IHelpCenter) => {
    let values = JSON.parse(JSON.stringify(data));
    if (values) {
      const formData = toFormData(values);
      submit(formData, {
        action: actionPath,
        method: "post",
      });
    }
  };
  return (
    <div>
      <LessonTitle title="Աջակցության կենտրոն" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.helpCenter}>
          <CstmInput placeholder="Թեմա" regName="term" />
          <CstmTextarea placeholder="Նամակ" regName="message" />
          <CustomBtn title="Ուղարկել" type="submit" />
        </form>
      </FormProvider>
    </div>
  );
};

const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = toObject(formData);
  console.log(data);

  return "message is send";
};

export const HelpCenter = Object.assign(HelpCenterComp, { action });
