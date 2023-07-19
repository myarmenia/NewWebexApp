
import * as yup from "yup";

export const company_register_schema = yup.object().shape({

  name: yup.string()
    .required("Անունը պարտադիր է")
    .min(4, "Անունը պետք է լինի առնվազն 4 նիշ")
    .max(20, "Անունը չպետք է գերազանցի 20 նիշը"),

  email: yup.string()
    .required("Էլ․ հասցեն պարտադիր է")
    .email("Էլ․ հասցեն անվավեր է"),
  password: yup.string()
    .required("Գաղտնաբառը պարտադիր է")
    .min(8, "Գաղտնաբառը պետք է լինի առնվազն 8 նիշ")
    .max(15, "Գաղտնաբառը չպետք է գերազանցի 15 նիշը"),
  repeatPassowrd: yup.string()
    .required("Գաղտնաբառ հաստատելը պարտադիր է")
    .oneOf([yup.ref("password"), null], "Հաստատված գաղտնաբառը սխալ է"),
});

export interface ICompanyRegisterSchema {
  name: string;
  email: string;
  password: string;
  repeatPassowrd: string;
}
