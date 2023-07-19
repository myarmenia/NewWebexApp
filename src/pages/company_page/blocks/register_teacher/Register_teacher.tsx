import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ActionFunction, redirect } from 'react-router-dom';
import emailIcon from '../../../../assets/registration_images/mail.png';
import passwordIcon from '../../../../assets/registration_images/password.png';
import userIcon from '../../../../assets/registration_images/user.png';
import { CstmInput, CustomBtn } from '../../../../components/forms';
import { toFormData, toObject } from '../../../../helper';
import { useAppSubmit } from '../../../../hooks';
// import { instance } from "../../request";
import {
  company_register_schema,
  ICompanyRegisterSchema,
} from '../../../../validations/company_register_schema';
import styles from './register_teacher.module.css';

const Company: FC = () => {
  const submit = useAppSubmit();
  const methods = useForm<ICompanyRegisterSchema>({
    resolver: yupResolver(company_register_schema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = (data: ICompanyRegisterSchema) => {
    console.log(data, 'data');

    if (Object.keys(data || {}).length) {
      const formData = toFormData(data);
      submit(formData, {
        action: '/company/register-teacher',
        method: 'post',
      });
    }
    // fetchData(data);
  };

  const formData = new FormData();
  formData.append('name', 'true');
  formData.append('name', '72');
  // const b =formData.get("name")
  const a = formData.getAll('name'); // ["true", "72"]
  console.log(a);
  console.log(Array.from('hasdnkas'));
  console.log(['a', 'b', 3].includes(3));
  console.log([1, 3, 6, 3].indexOf(3));
  const aya = [1, 2, 4, 5, 86, 75, 2, 2, 1];
  let rr = [...new Set(aya)];
  console.log(rr);




  return (
    <>
      <FormProvider {...methods}>
        <div className={styles.registration}>
          <div className={styles.registrationChild}>
            <div className={styles.registrationTitle}>Նոր դասախոսի գրանցում</div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles['registration-form']}>
              <CstmInput
                regName="name"
                boxClassName={styles['form-group']}
                img={userIcon}
                placeholder="Անուն"
              />

              <CstmInput
                regName="email"
                type="email"
                img={emailIcon}
                boxClassName={styles['form-group']}
                placeholder="Էլ․ փոստ"
              />
              <CstmInput
                regName="password"
                img={passwordIcon}
                type="password"
                autoComplete="on"
                boxClassName={styles['form-group']}
                placeholder="Գաղտնաբառ"
              />
              <CstmInput
                regName="repeatPassowrd"
                img={passwordIcon}
                type="password"
                autoComplete="on"
                boxClassName={styles['form-group']}
                placeholder="Կրկնել գաղտնաբառը"
              />

              <div className={styles['form-group-button']}>
                <CustomBtn title="Գրանցվել" type="submit" className={styles.btn} />
              </div>
            </form>
          </div>
        </div>
      </FormProvider>
    </>
  );
};

const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = toObject(formData);

  console.log(data);

  return redirect('/teacher');
};

export const RegisterTeacher = Object.assign(Company, { action });
