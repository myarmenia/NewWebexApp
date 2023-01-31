import * as Yup from "yup";

export const studentData_schema = Yup.object().shape({
  imgSrc: Yup.string(),
  adress: Yup.string().required("Լրացնելը պարտադիր է"),
  phoneNum: Yup.string()
    .typeError("must be a number")
    .required("Լրացնելը պարտադիր է")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(9, "min length must be greater than 8"),
  age: Yup.number()
    .typeError("must be a number")
    .required("Լրացնելը պարտադիր է")
    .moreThan(0, "min is 1")
    .lessThan(100, "max is 100"),
  // personalInfo: Yup.array().of(
  //   Yup.object().shape({
  //     adress: Yup.string().required("Լրացնելը պարտադիր է"),
  //     phoneNum: Yup.string().required("Լրացնելը պարտադիր է"),
  //   })
  // ),
  language: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Լրացնելը պարտադիր է"),
    })
  ),
});

interface IPersonalInfoProps {
  adress: string;
  phoneNum: string;
}
interface ILanguageProps {
  name: string;
}
export interface IStudentData {
  imgSrc: string;
  adress: string;
  phoneNum: string;
  age: number;
  language: ILanguageProps[];
  // personalInfo: IPersonalInfoProps[];
}
