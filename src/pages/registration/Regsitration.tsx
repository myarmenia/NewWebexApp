import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { CustomSelect } from "../../components/forms";
import Input from "../../components/teacherComponents/sherid/Input";
import facebook from "../../images/registration/facebook.png";
import gmail from "../../images/registration/gmail.png";
import emailIcon from "../../images/registration/mail.png";
import passwordIcon from "../../images/registration/password.png";
import userIcon from "../../images/registration/user.png";
import { registration_schema } from "../../validations/registration_schema";
import "./registration.css";
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

const Regsitration = () => {
  const methods = useForm<UserSubmitForm>({
    resolver: yupResolver(registration_schema),
  });
  const {
    register,
    handleSubmit,
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
