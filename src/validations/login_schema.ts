import * as Yup from "yup";

export const login_schema = Yup.object().shape({
  email: Yup.string()
    .required("Էլ․ հասցեն պարտադիր է")
    .email("Էլ․ հասցեն անվավեր է"),
  password: Yup.string()
    .required("Գաղտնաբառը պարտադիր է")
    .min(8, "Գաղտնաբառը պետք է լինի առնվազն 8 նիշ")
    .max(15, "Գաղտնաբառը չպետք է գերազանցի 15 նիշը"),
  acceptTerms: Yup.bool().oneOf([true], "Պայմաններ ընդունելը  պարտադիր է"),
});
