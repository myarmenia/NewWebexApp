import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import facebook from "../../assets/registration_images/facebook.png";
import gmail from "../../assets/registration_images/gmail.png";
import emailIcon from "../../assets/registration_images/mail.png";
import passwordIcon from "../../assets/registration_images/password.png";
import userIcon from "../../assets/registration_images/user.png";
import {
  CstmInput,
  CustomBtn,
  CustomCheckbox,
  CustomRadio,
  CustomSelect,
} from "../../components/forms";
import { ErrorMessage } from "../../components/reusable";
import { instance } from "../../request";
import { registration_schema } from "../../validations/registration_schema";
import styles from "./registration.module.css";
// import { Option } from "../header/customSelect/Option";
interface UserSubmitForm {
  teacherStudentId: string;
  select: string[];
  name: string;
  surName: string;
  email: string;
  password: string;
  repeatPassowrd: string;
  acceptTerms: boolean;
}

const fetchData = async (data: UserSubmitForm) => {
  await instance
    .post("addUser", data)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const Regsitration = () => {
  const methods = useForm<UserSubmitForm>({
    resolver: yupResolver(registration_schema),
  });
  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;
  const onSubmit = (data: UserSubmitForm) => {
    console.log(data);
    fetchData(data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <div className={styles.registration}>
          <div className={styles.registrationChild}>
            <div className={styles.registrationTitle}>Գրանցվել</div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles["registration-form"]}
            >
              <div className={styles["form-group-checkbox"]}>
                <div className={styles["form-group-checkboxChild"]}>
                  <CustomRadio
                    boxClassName="!gap-3"
                    labelClassName={styles["radio-label"]}
                    regName="teacherStudentId"
                    label="Դասավանդող"
                    value="Դասավանդող"
                  />
                  <CustomRadio
                    boxClassName="!gap-3"
                    labelClassName={styles["radio-label"]}
                    regName="teacherStudentId"
                    label="Ուսանող"
                    value="Ուսանող"
                  />
                </div>
                <ErrorMessage className="!left-[54%] !w-fit">
                  {errors.teacherStudentId?.message}
                </ErrorMessage>
              </div>

              {watch("teacherStudentId") === "Դասավանդող" && (
                <div className={styles["form-group"]}>
                  <CustomSelect
                    placeholder="selecti placehodery"
                    regName="select"
                    options={["Անհատ", "Ընկերություն"]}
                  />
                </div>
              )}

              <CstmInput
                regName="surName"
                boxClassName={styles["form-group"]}
                img={userIcon}
                placeholder="Անուն"
              />
              <CstmInput
                regName="name"
                boxClassName={styles["form-group"]}
                img={userIcon}
                placeholder="Ազգանուն"
              />
              <CstmInput
                regName="email"
                type="email"
                img={emailIcon}
                boxClassName={styles["form-group"]}
                placeholder="Էլ․ փոստ"
              />
              <CstmInput
                regName="password"
                img={passwordIcon}
                type="password"
                autoComplete="on"
                boxClassName={styles["form-group"]}
                placeholder="Գաղտնաբառ"
              />
              <CstmInput
                regName="repeatPassowrd"
                img={passwordIcon}
                type="password"
                autoComplete="on"
                boxClassName={styles["form-group"]}
                placeholder="Կրկնել գաղտնաբառը"
              />
              <div className={styles["form-group-checkbox2"]}>
                <div className={styles["form-group-checkboxChild2"]}>
                  <CustomCheckbox regName="acceptTerms" />
                  <p className={styles.acceptTerms_label}>
                    <span>Ես համաձայն եմ &nbsp;</span>
                    <Link
                      className="textPurple textUnderline after:bottom-[0.3px]"
                      to="#"
                    >
                      Օգտագործման համաձայնագրի
                    </Link>
                    <span>&nbsp; հետ</span>
                  </p>
                </div>
                {/* <div
                // className="invalid-feedback"
                >
                  {errors.acceptTerms?.message}
                </div> */}
              </div>
              <div className={styles["form-group-button"]}>
                <CustomBtn
                  title="Գրանցվել"
                  type="submit"
                  className={styles.btn}
                />
              </div>
            </form>
            <div className={styles.entry}>
              <p>Արդեն գրացնվա՞ծ եք</p> <Link to="/login">Մուտք</Link>
            </div>
            <div className={styles.social}>
              <Link to="#">
                <img src={facebook} />
              </Link>
              <Link to="#">
                <img src={gmail} />
              </Link>
            </div>
          </div>
        </div>
      </FormProvider>
    </>
  );
};

export default Regsitration;
