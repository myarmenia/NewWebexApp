import * as Yup from "yup";

export const registration_schema = Yup.object().shape({
  teacherStudentId: Yup.string()
    .oneOf(["Դասավանդող", "Ուսանող"])
    .required("Նշելը պարտադիր է")
    .nullable(),
  select: Yup.string().required("Նշելը պարտադիր է"),
  name: Yup.string()
    .required("Անունը պարտադիր է")
    .min(4, "Անունը պետք է լինի առնվազն 4 նիշ")
    .max(20, "Անունը չպետք է գերազանցի 20 նիշը"),
  email: Yup.string()
    .required("Էլ․ հասցեն պարտադիր է")
    .email("Էլ․ հասցեն անվավեր է"),
  password: Yup.string()
    .required("Գաղտնաբառը պարտադիր է")
    .min(8, "Գաղտնաբառը պետք է լինի առնվազն 8 նիշ")
    .max(15, "Գաղտնաբառը չպետք է գերազանցի 15 նիշը"),
  acceptTerms: Yup.bool(),
  repeatPassowrd: Yup.string()
    .required("Գաղտնաբառ հաստատելը պարտադիր է")
    .oneOf([Yup.ref("password"), null], "Հաստատված գաղտնաբառը սխալ է"),
});
