import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../../../components/teacherComponents/sherid/Input";
import { login_schema } from "../../../validations/login_schema";
import emailIcon from "../../../assets/registration_images/mail.png";
import passwordIcon from "../../../assets/registration_images/password.png";
import styles from "./entry.module.css";
import { CstmInput, CustomBtn } from "../../../components/forms";
import { Link } from "react-router-dom";
interface EntryForm {
  email: string;
  password: string;
  acceptTerms: boolean;
}

const Entry = () => {
  const methods = useForm<EntryForm>({
    resolver: yupResolver(login_schema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: EntryForm) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <div className={styles.entry}>
        <div className={styles.entryChild}>
          <div className={styles.entryTitle}>Մուտք</div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles["entry-form"]}
          >
            {/* <Input
            register={{ ...register("email") }}
            type="email"
            url={emailIcon}
            error={errors.email?.message}
            placeholder="Էլ․ փոստ"
          />
          <Input
            register={{ ...register("password") }}
            type="password"
            url={passwordIcon}
            error={errors.password?.message}
            placeholder="Գաղտնաբառ"
          /> */}

            <CstmInput
              regName="email"
              boxClassName={styles["form-group"]}
              img={emailIcon}
              type="email"
              placeholder="Էլ․ փոստ"
            />
            <CstmInput
              regName="password"
              boxClassName={styles["form-group"]}
              img={passwordIcon}
              type="password"
              placeholder="Գաղտնաբառ"
            />
            <div className={styles.recover}>
              <a href="">Վերականգնել գաղտնաբառը</a>
            </div>
            <div className={styles["form-group-checkbox2"]}>
              <input
                type="checkbox"
                {...register("acceptTerms")}
                // className={`form-check-input ${
                //   errors.acceptTerms ? "is-invalid" : ""
                // }`}
              />
              <label
                htmlFor="acceptTerms"
                // className="form-check-label"
              >
                Հիշել
              </label>
            </div>
            <div
            // className="invalid-feedback"
            >
              {errors.acceptTerms?.message}
            </div>
            <div
            // className="form-group-button"
            > 
              <CustomBtn title="Մուտք" type="submit" className={styles.btn} />
            </div>
          </form>
          <div className={styles.register}>
            <p>Դեռ գրացնվա՞ծ չեք </p> <Link to="/registration">Գրանցվել</Link>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default Entry;
