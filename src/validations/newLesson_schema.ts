import * as Yup from "yup";
import type { InferType, AnySchema, AnyObjectSchema } from "yup";
import { RequiredStringSchema } from "yup/lib/string";
import { ObjectShape } from "yup/lib/object";

// Yup
export const newLesson_schema = Yup.object().shape<Shape<TeacherSubmitForm>>({
  title: Yup.string()
    .min(4, "վերնագիրը պետք է լինի առնվազն 4 նիշ")
    .max(20, "վերնագիրը չպետք է գերազանցի 20 նիշը")
    .required("title is required"),
  select: Yup.string().required("this option is required"),
  select1: Yup.string().required("this option is required").default(""),
  describtion: Yup.string().min(4, "min is 4").required("afdsfs"),
  cost: Yup.number()
    .positive()
    .typeError("must be 'number' and this option is required")
    .required("cost is required"),
  isAgeLimit: Yup.bool(),
  minAgeLimit: Yup.number().when("isAgeLimit", {
    is: false,
    then: Yup.number()
      .moreThan(5, "min is 5")
      .lessThan(7, "max is 7")
      .required("Required"),
  }),
  coverImage: Yup.string(),
  areStagesDifferent: Yup.bool(),
  stagesCount: Yup.number()
    .moreThan(0, "min is 1")
    .lessThan(999, "max is 1000"),
  stageLessons: Yup.number()
    .moreThan(0, "min is 1")
    .lessThan(999, "max is 1000"),
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
      count: Yup.number().moreThan(0, "min is 1").lessThan(999, "max is 1000"),
      stage: Yup.number(),
    })
  ),
  requiredKnowledges: Yup.array().of(Yup.object()),
});

// ==============================

type ObjectShapeValues = ObjectShape extends Record<string, infer V>
  ? V
  : never;
type Shape<T extends Record<string, any>> = Partial<
  Record<keyof T, ObjectShapeValues>
>;

export type RemoveIndex<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : K]: T[K];
};

// export interface TeacherSubmitForm
//   extends RemoveIndex<InferType<typeof newLesson_schema>> {}

export interface TeacherSubmitForm {
  title: string;
  select: string;
  select1: string;
  describtion: string;
  cost: number;
  isAgeLimit: boolean;
  minAgeLimit?: number;
  // maxAgeLimit?: number;
  coverImage: string;
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
