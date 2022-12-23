import * as Yup from "yup";
import { UseFieldArrayReturn, useFormContext } from "react-hook-form";
export interface inputChildProps {
  isActive?: boolean;
  option?: any;
  selectName?: string;
  regName: string;
  fieldArray: UseFieldArrayReturn<PersonalSubmitForm, any, "id">;
}
export interface PersonalYupProps {
  select: string;
  company: string;
  position: string;
  acceptTerms: boolean;
  start: string;
  end: string;
  description: string;
}
export interface PersonalYupProps2 {
  select2: string;
  statement: string;
  faculty: string;
  profession: string;
  start: string;
  end: string;
}
export interface PersonalYupProps3 {
  name: string;
  company: string;
  profession: string;
  start: string;
  end: string;
}
export interface PersonalYupProps4 {
  languages: string;
}
export interface PersonalSubmitForm {
  img: string;
  adress: string;
  tel: string;
  workattempt: PersonalYupProps[];
  education: PersonalYupProps2[];
  languages: PersonalYupProps4[];
  additionaledu: PersonalYupProps3[];
  sertificat: string;
}

export const validationSchema = Yup.object().shape({
  img: Yup.string(),
  address: Yup.string(),
  tel: Yup.string(),
  workattempt: Yup.array().of(
    Yup.object().shape({
      select: Yup.string(),
      company: Yup.string(),
      position: Yup.string(),
      acceptTerms: Yup.bool().oneOf([true], "Պայմաններ ընդունելը  պարտադիր է"),
      start: Yup.string(),
      end: Yup.string(),
      description: Yup.string(),
    })
  ),
  education: Yup.array().of(
    Yup.object().shape({
      select2: Yup.string(),
      statement: Yup.string(),
      faculty: Yup.string(),
      profession: Yup.string(),
      start: Yup.string(),
      end: Yup.string(),
    })
  ),
  languages: Yup.array().of(Yup.string()),
  additionaledu: Yup.array().of(
    Yup.object().shape({
      name: Yup.string(),
      company: Yup.string(),
      profession: Yup.string(),
      start: Yup.string(),
      end: Yup.string(),
    })
  ),
  sertificat: Yup.string(),
});
