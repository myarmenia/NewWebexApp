import * as Yup from "yup";

// export interface CreateGrafficProps {
//   time: { data: string }[];
// }
export const Schema = Yup.object().shape({
  data: Yup.array().of(Yup.object()),
});
