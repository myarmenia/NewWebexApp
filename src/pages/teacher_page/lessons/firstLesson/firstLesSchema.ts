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
  lessonFile: Yup.string(),
  homeworkFile: Yup.string(),
  lessonImage_url: Yup.string(),
  homeworkImage_url: Yup.string(),
});
export interface IFirstLessonSchema {
  lessonTitle: string;
  videoInp: string;
  contents: string;
  videoInpHomework: string;
  contentsHomework: string;
  lessonFile: string;
  homeworkFile: string;
  lessonImage_url: string;
  homeworkImage_url: string;
}
