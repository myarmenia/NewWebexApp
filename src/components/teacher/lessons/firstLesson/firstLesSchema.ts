import * as Yup from "yup";

// Yup
export const firstLessonSchema = Yup.object().shape({
  lessonTitle: Yup.string()
    .min(4, "min is 4")
    .max(24, "max is 24")
    .required("title is required"),
  videoInp: Yup.string().required("fill the input"),
  contents: Yup.string().required("asdfafsaf"),
  videoInpHomework: Yup.string().required("fill the input"),
  contentsHomework: Yup.string().required("asdfafsaf"),
});
export interface IFirstLessonSchema {
  lessonTitle: string;
  videoInp: string;
  contents: string;
  videoInpHomework: string;
  contentsHomework: string;
}
