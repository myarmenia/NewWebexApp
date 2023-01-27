import * as Yup from "yup";

export const studentData_schema = Yup.object().shape({
  imgSrc: Yup.string(),
  adress: Yup.string().required("Լրացնելը պարտադիր է"),
  phoneNum: Yup.string().required("Լրացնելը պարտադիր է"),
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
  personalInfo: IPersonalInfoProps[];
  language: ILanguageProps[];
  adress: string;
  phoneNum: string;
}
