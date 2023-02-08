import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { login_schema } from "../../../validations/login_schema";
import emailIcon from "../../../assets/registration_images/mail.png";
import passwordIcon from "../../../assets/registration_images/password.png";
import styles from "./entry.module.css";
import {
  CstmInput,
  CustomBtn,
  CustomCheckbox,
} from "../../../components/forms";
import { ActionFunction, Link } from "react-router-dom";
import { toFormData, toObject } from "../../../helper";
import { useAppSubmit } from "../../../hooks";

interface EntryForm {
  email: string;
  password: string;
  acceptTerms: boolean;
}

const EntryComp = () => {
  const submit = useAppSubmit();
  const methods = useForm<EntryForm>({
    resolver: yupResolver(login_schema),
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: EntryForm) => {
    let values = JSON.parse(JSON.stringify(data));
    if (values) {
      const formData = toFormData(values);
      submit(formData, {
        action: "/login",
        method: "post",
      });
    }
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
              autoComplete="on"
              placeholder="Գաղտնաբառ"
            />
            <div className={styles.recover}>
              <Link to="">Վերականգնել գաղտնաբառը</Link>
            </div>
            <CustomCheckbox
              regName="acceptTerms"
              label="Հիշել"
              boxClassName={styles["form-group-checkbox2"]}
              errorClassName="!bottom-[-6px]"
            />
            <CustomBtn title="Մուտք" type="submit" className={styles.btn} />
          </form>
          <div className={styles.register}>
            <p>Դեռ գրացնվա՞ծ չեք </p> <Link to="/registration">Գրանցվել</Link>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = toObject(formData);
  console.log(data);

  return "logged in";
};

export const Entry = Object.assign(EntryComp, { action });
