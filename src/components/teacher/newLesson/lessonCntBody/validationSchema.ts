import * as Yup from "yup";

export interface TeacherSubmitForm {
  select: string;
  select1: string;
  title: string;
  cost: number;
  minAgeLimit: number;
  maxAgeLimit: number;
}
// Yup
export const nLessCreate_L_Schema = Yup.object().shape({
  title: Yup.string()
    .min(4, "վերնագիրը պետք է լինի առնվազն 4 նիշ")
    .max(20, "վերնագիրը չպետք է գերազանցի 20 նիշը")
    .required("title is required"),
  select: Yup.string().required("this option is required"),
  select1: Yup.string().required("this option is required").default(""),
  cost: Yup.number()
    .positive()
    .typeError("must be 'number' and this option is required")
    .required("cost is required"),
  minAgeLimit: Yup.number().default(16),
  maxAgeLimit: Yup.number().default(99),
});
export type Selects = "select" | "select1" | "minAgeLimit" | "maxAgeLimit";
