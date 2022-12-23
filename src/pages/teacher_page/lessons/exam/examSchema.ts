import * as Yup from "yup";

const questionProps = Yup.object().shape({
  examQuestion: Yup.string(),
  image: Yup.string(),
  responseVariants: Yup.array(
    Yup.object().shape({
      variant: Yup.string(),
      isVariantTrue: Yup.boolean()
    })
  ),
});

export const examSchema = Yup.object().shape({
  examTitle: Yup.string()
    .min(4, "min is 4")
    .max(16, "max is 16")
    .required("title is required"),
  describtion: Yup.string()
    .min(4, "min is 4")
    .max(16, "max is 16")
    .required("describe your exam"),
  threshold: Yup.string(),
  duration: Yup.string(),
  examImage: Yup.string(),
  questionBox: Yup.array(questionProps),
});

export interface IExamSchema {
  examTitle: string;
  describtion: string;
  threshold: string;
  duration: string;
  examImage: string;
  questionBox: IQuestionBox[];
}
export interface IQuestionBox {
  examQuestion: string;
  image: string;
  responseVariants: {
    variant: string;
    isVariantTrue: boolean;
  }[];
}
