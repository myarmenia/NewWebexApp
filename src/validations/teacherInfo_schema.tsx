import * as Yup from "yup";
import { UseFieldArrayReturn } from "react-hook-form";
export interface inputChildProps {
  isActive?: boolean;
  option?: any;
  selectName?: string;
}
interface workAttemptYupProps {
  select: string;
  company: string;
  position: string;
  acceptTerms: boolean;
  start: string | Date;
  end: string | Date;
  description: string;
}
interface educationYupProps {
  select2: string;
  statement: string;
  faculty: string;
  profession: string;
  start: string | Date;
  end: string | Date;
}
interface languagesYupProps {
  language: string;
}
interface additionaleduYupProps {
  name: string;
  company: string;
  profession: string;
  start: string | Date;
  end: string | Date;
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

export const teacherInfo_schema = Yup.object().shape({
  img: Yup.mixed<File>(),
  address: Yup.string(),
  tel: Yup.string(),
  aboutme: Yup.string(),
  workattempt: Yup.array().of(
    Yup.object().shape({
      select: Yup.string().required("Required"),
      company: Yup.string().required("Required"),
      position: Yup.string(),
      acceptTerms: Yup.bool().oneOf([true], "Պայմաններ ընդունելը  պարտադիր է"),
      start: Yup.date().max(new Date(), "Future date not allowed"),
      end: Yup.date(),
      // .when(
      //   "start",
      //   (start, Yup) =>
      //     start && Yup.min(start, "End time cannot be before start time")
      // ),
      description: Yup.string(),
    })
  ),
  education: Yup.array().of(
    Yup.object().shape({
      select2: Yup.string(),
      statement: Yup.string(),
      faculty: Yup.string(),
      profession: Yup.string(),
      start: Yup.date(),
      end: Yup.date(),
      // .when(
      //   "start",
      //   (start, Yup) =>
      //     start && Yup.min(start, "End time cannot be before start time")
      // ),
    })
  ),
  languages: Yup.array().of(
    Yup.object().shape({
      language: Yup.string().min(5, "min is 5").required("Required"),
    })
  ),
  additionaledu: Yup.array().of(
    Yup.object().shape({
      name: Yup.string(),
      company: Yup.string(),
      profession: Yup.string(),
      start: Yup.date(),
      end: Yup.date(),
      // .when(
      //   "start",
      //   (start, Yup) =>
      //     start && Yup.min(start, "End time cannot be before start time")
      // ),
    })
  ),
  sertificat: Yup.mixed<File>(),
});
