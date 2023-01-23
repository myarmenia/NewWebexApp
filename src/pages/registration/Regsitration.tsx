import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { CustomSelect } from "../../components/forms";
import Input from "../../components/teacherComponents/sherid/Input";
import facebook from "../../assets/registration_images/facebook.png";
import gmail from "../../assets/registration_images/gmail.png";
import emailIcon from "../../assets/registration_images/mail.png";
import passwordIcon from "../../assets/registration_images/password.png";
import userIcon from "../../assets/registration_images/user.png";
import { registration_schema } from "../../validations/registration_schema";
import styles from "./registration.module.css";
import { instance } from "../../request";
// import { Option } from "../header/customSelect/Option";
interface UserSubmitForm {
  teacherStudentId: string;
  // select: string[];
  name: string;
  email: string;
  password: string;
  repeatPassowrd: string;
  // acceptTerms: boolean;
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
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;
  const onSubmit = (data: UserSubmitForm) => {
    console.log(data);
    fetchData(data);
  };
  const isOpenDropdown = watch("teacherStudentId");

  return (
    <>
      <FormProvider {...methods}>
        <div className={styles.registration}>
          <div className={styles.registrationChild}>
            <div className={styles.registrationChild}>Գրանցվել</div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles["registration-form"]}
            >
              <div className={styles["form-group-checkbox"]}>
                <div className={styles["form-group-checkboxChild"]}>
                  <input
                    type="radio"
                    value="1"
                    {...register("teacherStudentId")}
                    className="teacher"
                  />
                  <label className={styles["radio-label"]}>Դասավանդող</label>
                  <input
                    value="2"
                    type="radio"
                    {...register("teacherStudentId")}
                  />
                  <label className={styles["radio-label"]}>Ուսանող</label>
                </div>
                <div
                // className="invalid-feedback"
                >
                  {errors.teacherStudentId?.message}
                </div>
              </div>

              {isOpenDropdown === "Դասավանդող" ? (
                <div className={styles["form-group2"]}>
                  <CustomSelect
                    placeholder="selecti placehodery"
                    regName="select"
                    // className="registration_select"

                    options={["asdsad", "asdads", "adsd"]}
                  />
                </div>
              ) : null}

              <Input
                register={{ ...register("name") }}
                type="text"
                className="name"
                url={userIcon}
                error={errors.name?.message}
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
                register={{ ...register("repeatPassowrd") }}
                type="password"
                url={passwordIcon}
                error={errors.repeatPassowrd?.message}
                placeholder="Կրկնել գաղտնաբառը"
              />
              <div className={styles["form-group-checkbox2"]}>
                {/* <div className={styles["form-group-checkboxChild2"]}>
                  <input
                    type="checkbox"
                    {...register("acceptTerms")}
                    // className={`form-check-input ${
                    //   errors.acceptTerms ? "is-invalid" : ""
                    // }`}
                    className={styles["form-check-input"]}
                  />
                  <label
                    htmlFor="acceptTerms"
                    // className="form-check-label"
                  >
                    Ես համաձայն եմ Օգտագործման համաձայնագրի հետ
                  </label>
                </div> */}
                {/* <div
                // className="invalid-feedback"
                >
                  {errors.acceptTerms?.message}
                </div> */}
              </div>
              <div className={styles["form-group-button"]}>
                <button type="submit" className={styles.btn}>
                  Գրանցվել
                </button>
              </div>
            </form>
            <div className={styles.entry}>
              <p>Արդեն գրացնվա՞ծ եք</p> <a href="">Մուտք</a>
            </div>
            <div className={styles.social}>
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
