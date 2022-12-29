import * as Yup from "yup";
import { UseFieldArrayReturn } from "react-hook-form";
import YouTubePlayer from "react-player/youtube";
export interface inputChildProps {
  isActive?: boolean;
  option?: any;
  selectName?: string;
  regName: string;
  fieldArray: UseFieldArrayReturn<PersonalSubmitForm, any, "id">;
}
interface workAttemptYupProps {
  select: string;
  company: string;
  position: string;
  acceptTerms: boolean;
  start: string;
  end: string;
  description: string;
}
interface educationYupProps {
  select2: string;
  statement: string;
  faculty: string;
  profession: string;
  start: string;
  end: string;
}
interface languagesYupProps {
  languages: string;
}
interface additionaleduYupProps {
  name: string;
  company: string;
  profession: string;
  start: string;
  end: string;
}

export interface PersonalSubmitForm {
  img: string;
  address: string;
  tel: string;
  aboutme: string;
  workattempt: workAttemptYupProps[];
  education: educationYupProps[];
  languages: languagesYupProps[];
  additionaledu: additionaleduYupProps[];
  sertificat: string;
}

export const personalInfoValidation = Yup.object().shape({
  img: Yup.string(),
  address: Yup.string().required("partadir e"),
  tel: Yup.string().required("partadir e"),
  aboutme: Yup.string().required("partadir e"),
  workattempt: Yup.array().of(
    Yup.object().shape({
      select: Yup.string().required("partadir e"),
      company: Yup.string().required("partadir e"),
      position: Yup.string().required("partadir e"),
      acceptTerms: Yup.bool().oneOf([true], "Պայմաններ ընդունելը  պարտադիր է"),
      start: Yup.string(),
      end: Yup.string(),
      description: Yup.string().required("partadir e"),
    })
  ),
  education: Yup.array().of(
    Yup.object().shape({
      select2: Yup.string().required("partadir e"),
      statement: Yup.string().required("partadir e"),
      faculty: Yup.string().required("partadir e"),
      profession: Yup.string().required("partadir e"),
      start: Yup.string(),
      end: Yup.string(),
    })
  ),
  languages: Yup.array().of(
    Yup.object().shape({ languages: Yup.string().required("partadir e") })
  ),
  additionaledu: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("partadir e"),
      company: Yup.string().required("partadir e"),
      profession: Yup.string().required("partadir e"),
      start: Yup.string(),
      end: Yup.string(),
    })
  ),
  sertificat: Yup.string(),
});
