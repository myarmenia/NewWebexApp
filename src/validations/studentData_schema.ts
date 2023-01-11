import * as Yup from "yup";

export const studentData_schema = Yup.object().shape({
  imgSrc: Yup.string(),
  personalInfo: Yup.array().of(
    Yup.object().shape({
      adress: Yup.string().required("Լրացնելը պարտադիր է"),
      phoneNum: Yup.string().required("Լրացնելը պարտադիր է"),
    })
  ),
  language: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Լրացնելը պարտադիր է"),
    })
  ),
});
