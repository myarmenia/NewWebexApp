import { FC } from "react";
import { LesImageBox } from "./lesImageBox/LesImageBox";
import "./stdLesPage.css";
import { LoaderFunctionArgs } from "react-router";
import { LessonTitle } from "../../../../../components/reusable/lessonTitle/LessonTitle";
import { LessonProps } from "../../../../../models/interfaces";
import { LesContainer } from "../../../../teacher_page/lessons/userLessons/userLesComponents/lesContainer/LesContainer";
import { LesPTitle } from "../../../../teacher_page/lessons/userLessons/userLesComponents/lesPTitle/LesPTitle";
import { StdLesCases } from "./stdLesCases/StdLesCases";
import { StdLesStages } from "./stdLesStages/StdLesStages";
import starImg from "../../../../../assets/student_images/studentLessons/Star 5.svg";
import { FormProvider, useForm } from "react-hook-form";
import { CustomBtn } from "../../../../../components/forms/customBtn/CustomBtn";
import { CstmTextarea } from "../../../../../components/forms/cstmTextarea/CstmTextarea";

export interface LesPageProps extends LessonProps {
  stageCount: number;
  stageLessons: number;
  lessonTime: 2;
  studentsCount?: number;
  isCourseActive: boolean;
}

export const StdLesPage: FC<LesPageProps> = ({
  stageCount,
  stageLessons,
  lessonTime,
  studentsCount,
  keys,
  price,
  title,
}) => {
  // ----- Loader data ------
  // const { obj } = useLoaderData() as ILessonLoaderData;
  // const { title, body } = obj;

  // const params = useParams();
  // const { lessonsArr } = useSelector(lessonsSelectorFN);
  // const currentObj = lessonsArr[+params.id! - 1];
  // const { title, body } = currentObj;
  const methods = useForm({
    defaultValues: {
      opinion: "",
    },
  });
  return (
    <>
      <LessonTitle title="Իմ դասընթացները" className="w-full justify-between" />
      <div className="lesPage">
        <div className="lesPage_container">
          <LesContainer>{title && <LesPTitle {...{ title }} />}</LesContainer>
          <LesImageBox {...{ stageCount, stageLessons, lessonTime }} />
          <LesContainer>
            <StdLesCases
              {...{ studentsCount, title, price, keys }}
              description={
                "Դասընթացի նկարագրությունը, Որպեսզի արդյունքի հասնելու համար, որն ավելի շատ համապատասխանի վերջնական արդյունքին, գրաֆիկական դիզայներները, Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով ։ "
              }
            />
            <StdLesStages />
            {/* <StdLesComments /> */}
            <div className="flex flex-col mt-3">
              <p className="text-gray font-bold mb-2">Դասախոս</p>
              <span className="text-xl text-gray">Անուն Ազգանուն</span>
            </div>
            <div className="w-full bg-[#898BCE] h-[1px]" />
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-sm text-gray">
                  Թողնել կարծիք
                </span>
                <div className="flex items-center gap-[6px]">
                  <img src={starImg} alt="" />
                  <img src={starImg} alt="" />
                  <img src={starImg} alt="" />
                  <img src={starImg} alt="" />
                  <img src={starImg} alt="" />
                </div>
              </div>
              <FormProvider {...methods}>
                <form
                  onSubmit={methods.handleSubmit((d) => console.log(d))}
                  className="w-full flex flex-col gap-8"
                >
                  <CstmTextarea placeholder="Գրել կարծիքը" regName="opinion" />
                  <CustomBtn
                    type="submit"
                    title="Ուղարկել"
                    className="!w-[254px]"
                  />
                </form>
              </FormProvider>
            </div>
          </LesContainer>
        </div>
      </div>
    </>
  );
};

export const lessonPageLoader = async ({ params }: LoaderFunctionArgs) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}?userId=1`
  );
  const lessons = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=1`
  );
  const paramsId = params.id;
  const paramsLes = params.les;
  const obj = await res.json();
  const lessonsObj = await lessons.json();
  return { obj, lessonsObj, paramsId, paramsLes };
};
