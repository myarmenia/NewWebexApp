import * as Yup from "yup";

// Yup
export const nLessCreate_L_Schema = Yup.object().shape({
  title: Yup.string()
    .min(4, "վերնագիրը պետք է լինի առնվազն 4 նիշ")
    .max(20, "վերնագիրը չպետք է գերազանցի 20 նիշը")
    .required("title is required"),
  select: Yup.string().required("this option is required"),
  select1: Yup.string().required("this option is required").default(""),
  describtion: Yup.string().min(3, "min is 3"),
  cost: Yup.number()
    .positive()
    .typeError("must be 'number' and this option is required")
    .required("cost is required"),
  isAgeLimit: Yup.bool(),
  minAgeLimit: Yup.number()
    .positive()
    .typeError("must be 'number'")
    .moreThan(16, "minimum 16")
    .lessThan(99, "maximum 99")
    .default(16),
  maxAgeLimit: Yup.number()
    .positive()
    .typeError("must be 'number'")
    .moreThan(16, "minimum 16")
    .lessThan(99, "maximum 99")
    .default(99),
  areStagesDifferent: Yup.bool(),
  stagesCount: Yup.number()
    .positive()
    .typeError("must be 'number'")
    .moreThan(1, "minimum 1")
    .lessThan(99, "maximum 99")
    .default(3),
  stageLessons: Yup.number()
    .positive()
    .typeError("must be 'number'")
    .moreThan(1, "minimum 1")
    .lessThan(99, "maximum 99")
    .default(3),
  lessonTime: Yup.string().default("02:00:00"),
  isExam: Yup.string()
    .oneOf(["Այո", "Ոչ"])
    .required("Նշելը պարտադիր է")
    .nullable(),
  certificate: Yup.string()
    .oneOf(["Այո", "Ոչ"])
    .required("Նշելը պարտադիր է")
    .nullable(),
  stages: Yup.array().of(
    Yup.object({
      stageDescription: Yup.string()
        .min(4, "some aafdsadf")
        .required("required"),
      count: Yup.number().moreThan(2, "more than 2").required("dfadf"),
      stage: Yup.number(),
    })
  ),
  requiredKnowledges: Yup.array().of(Yup.object()),
});

// ==============================

export interface TeacherSubmitForm {
  title: string;
  select: string;
  select1: string;
  describtion: string;
  cost: number;
  isAgeLimit: boolean;
  minAgeLimit?: number;
  maxAgeLimit?: number;
  stagesCount: number;
  areStagesDifferent: boolean;
  stageLessons?: number;
  lessonTime: string;
  isExam: string;
  certificate: string;
  stages: ITeacherStages[];
  requiredKnowledges: {
    knowledge: string;
  }[];
}

export interface ITeacherStages {
  stageDescription: string;
  count?: number | null;
  stage: number;
}
