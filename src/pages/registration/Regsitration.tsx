import React, { useState } from "react";
import { useForm, useWatch, Control, FormProvider } from "react-hook-form";
import "./registration.css";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import userIcon from "../../images/registration/user.png";
import emailIcon from "../../images/registration/mail.png";
import passwordIcon from "../../images/registration/password.png";
import facebook from "../../images/registration/facebook.png";
import gmail from "../../images/registration/gmail.png";
import { CustomSelect } from "../../components/forms/customSelect/CustomSelect";
import Input from "../../components/teacherComponents/sherid/Input";
// import { Option } from "../header/customSelect/Option";
interface UserSubmitForm {
  checkbox: string;
  select: string[];
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
const Regsitration = () => {
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
      <FormProvider {...methods}>
        <div className="registration">
          <div className="registrationChild">
            <div className="registrationTitle">Գրանցվել</div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="registration-form"
            >
              <div className="form-group-checkbox">
                <div className="form-group-checkboxChild">
                  <input
                    type="radio"
                    value="Դասավանդող"
                    {...register("checkbox")}
                    className="teacher"
                  />
                  <label className="radio-label">Դասավանդող</label>
                  <input
                    value="Ուսանող"
                    type="radio"
                    {...register("checkbox")}
                  />
                  <label className="radio-label">Ուսանող</label>
                </div>
                <div className="invalid-feedback">
                  {errors.checkbox?.message}
                </div>
              </div>

              {isOpenDropdown === "Դասավանդող" ? (
                <div className="form-group2">
                  <CustomSelect
                    placeholder="selecti placehodery"
                    regName="select"
                    className="registration_select"
                    options={["asdsad", "asdads", "adsd"]}
                  />
                </div>
              ) : null}

              <Input
                register={{ ...register("username") }}
                type="text"
                className="name"
                url={userIcon}
                error={errors.username?.message}
                placeholder="Անուն"
              />
              <Input
                register={{ ...register("email") }}
                type="email"
                className="email"
                url={emailIcon}
                error={errors.email?.message}
                placeholder="Էլ․ փոստ"
              />
              <Input
                register={{ ...register("password") }}
                type="password"
                className="password"
                url={passwordIcon}
                error={errors.password?.message}
                placeholder="Գաղտնաբառ"
              />
              <Input
                register={{ ...register("confirmPassword") }}
                type="password"
                className="password"
                url={passwordIcon}
                error={errors.confirmPassword?.message}
                placeholder="Կրկնել գաղտնաբառը"
              />
              <div className="form-group-checkbox2">
                <div className="form-group-checkboxChild2">
                  <input
                    type="checkbox"
                    {...register("acceptTerms")}
                    className={`form-check-input ${
                      errors.acceptTerms ? "is-invalid" : ""
                    }`}
                  />
                  <label htmlFor="acceptTerms" className="form-check-label">
                    Ես համաձայն եմ Օգտագործման համաձայնագրի հետ
                  </label>
                </div>
                <div className="invalid-feedback">
                  {errors.acceptTerms?.message}
                </div>
              </div>
              <div className="form-group-button">
                <button type="submit" className="btn">
                  Գրանցվել
                </button>
              </div>
            </form>
            <div className="entry">
              <p>Արդեն գրացնվա՞ծ եք</p> <a href="">Մուտք</a>
            </div>
            <div className="social ">
              <a href="#">
                <img src={facebook} />
              </a>
              <a href="#">
                <img src={gmail} />
              </a>
            </div>
          </div>
        </div>
      </FormProvider>
    </>
  );
};

export default Regsitration;
