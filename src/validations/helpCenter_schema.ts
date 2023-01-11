import * as Yup from "yup";

export const helpCenter_schema = Yup.object().shape({
  term: Yup.string().required("Լրացնելը պարտադիր է"),
  message: Yup.string().required("Լրացնելը պարտադիր է"),
});
