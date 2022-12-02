import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import emailIcon from "../../images/registration/mail.png";
import passwordIcon from "../../images/registration/password.png";
import Input from "../sherid/Input";
import "./entry.css";
interface EntryForm {
  email: string;
  password: string;
  acceptTerms: boolean;
}

const Entry = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Էլ․ հասցեն պարտադիր է")
      .email("Էլ․ հասցեն անվավեր է"),
    password: Yup.string()
      .required("Գաղտնաբառը պարտադիր է")
      .min(8, "Գաղտնաբառը պետք է լինի առնվազն 8 նիշ")
      .max(15, "Գաղտնաբառը չպետք է գերազանցի 15 նիշը"),
    acceptTerms: Yup.bool().oneOf([true], "Պայմաններ ընդունելը  պարտադիր է"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EntryForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: EntryForm) => {
    console.log(data);
  };
  return (
    <div className="entry">
      <div className="entryChild">
        <div className="entryTitle">Մուտք</div>
        <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
          <Input
            register={{ ...register("email") }}
            type="email"
            url={emailIcon}
            error={errors.email?.message}
            placholder="Էլ․ փոստ"
          />
          <Input
            register={{ ...register("password") }}
            type="password"
            url={passwordIcon}
            error={errors.password?.message}
            placholder="Գաղտնաբառ"
          />
          <div className="recover">
            <a href="">Վերականգնել գաղտնաբառը</a>
          </div>
          <div className="form-group-checkbox2">
            <input
              type="checkbox"
              {...register("acceptTerms")}
              className={`form-check-input ${
                errors.acceptTerms ? "is-invalid" : ""
              }`}
            />
            <label htmlFor="acceptTerms" className="form-check-label">
              Հիշել
            </label>
          </div>
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
          <div className="form-group-button">
            <button type="submit" className="btn">
              Մուտք
            </button>
          </div>
        </form>
        <div className="register">
          <p>Դեռ գրացնվա՞ծ չեք </p> <a href="">Գրանցվել</a>
        </div>
      </div>
    </div>
  );
};

export default Entry;
