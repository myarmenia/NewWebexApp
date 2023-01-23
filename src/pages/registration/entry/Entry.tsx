import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../../../components/teacherComponents/sherid/Input";
import { login_schema } from "../../../validations/login_schema";
import emailIcon from "../../images/registration/mail.png";
import passwordIcon from "../../images/registration/password.png";
import styles from "./entry.module.css";
interface EntryForm {
  email: string;
  password: string;
  acceptTerms: boolean;
}

const Entry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EntryForm>({
    resolver: yupResolver(login_schema),
  });

  const onSubmit = (data: EntryForm) => {
    console.log(data);
  };
  return (
    <div className={styles.entry}>
      <div className={styles.entryChild}>
        <div className={styles.entryTitle}>Մուտք</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles["entry-form"]}
        >
          <Input
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
            <button type="submit" className={styles.btn}>
              Մուտք
            </button>
          </div>
        </form>
        <div className={styles.register}>
          <p>Դեռ գրացնվա՞ծ չեք </p> <a href="">Գրանցվել</a>
        </div>
      </div>
    </div>
  );
};

export default Entry;
