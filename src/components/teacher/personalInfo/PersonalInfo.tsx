import React from "react";
import AddImg from "../../sherid/addImg/AddImg";
import Input from "../../sherid/Input";
import { CustomSelect } from "../lesComponents/customSelect/CustomSelect";
import { LessonTitle } from "../lessonTitle/LessonTitle";
import * as Yup from "yup";
import "./personalInfo.css";
import { ISelect } from "../../../models/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch, Control, FormProvider } from "react-hook-form";

import { InputChild } from "./inputChild/InputChild";

interface UserSubmitForm {
  checkbox: string;
  select: ISelect;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}
const validationSchema = Yup.object().shape({
  checkbox: Yup.string()
    .oneOf(["Դասավանդող", "Ուսանող"])
    .required("Նշելը պարտադիր է")
    .nullable(),
  select: Yup.string().required("Նշելը պարտադիր է"),
  username: Yup.string()
    .required("Անունը պարտադիր է")
    .min(4, "Անունը պետք է լինի առնվազն 4 նիշ")
    .max(20, "Անունը չպետք է գերազանցի 20 նիշը"),
  email: Yup.string()
    .required("Էլ․ հասցեն պարտադիր է")
    .email("Էլ․ հասցեն անվավեր է"),
  password: Yup.string()
    .required("Գաղտնաբառը պարտադիր է")
    .min(8, "Գաղտնաբառը պետք է լինի առնվազն 8 նիշ")
    .max(15, "Գաղտնաբառը չպետք է գերազանցի 15 նիշը"),
  confirmPassword: Yup.string()
    .required("Գաղտնաբառ հաստատելը պարտադիր է")
    .oneOf([Yup.ref("password"), null], "Հաստատված գաղտնաբառը սխալ է"),
  acceptTerms: Yup.bool().oneOf([true], "Պայմաններ ընդունելը  պարտադիր է"),
});
const PersonalInfo = () => {
  const methods = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = methods;
  const onSubmit = (data: UserSubmitForm) => {
    console.log(data);
  };
  const isOpenDropdown = watch("checkbox");

  return (
    <>
      <LessonTitle title="Անձնական տվյալներ" />
      <FormProvider {...methods}>
        <div className="personalInfo">
          <AddImg />
          <div className="personalInfoChild">
            <div className="infoChild">
              <div className="infoName">Անձնական տվյալներ</div>
              <input type="text" className="name" placeholder="Հասցե" />
              <input type="text" className="name" placeholder="Հեռախոս" />
              <InputChild isActive={true} />
              <InputChild isActive={false} />
            </div>
            <div className="infoChild2"></div>
          </div>
        </div>
      </FormProvider>
    </>
  );
};

export default PersonalInfo;
