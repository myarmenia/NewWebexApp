import { FC, useCallback, useEffect, useState } from "react";
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
import { OpinionStars } from "./opinionStars/OpinionStars";
import { instance } from "../../../../../request/request";

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

  const [value, setValue] = useState<string>("");
  const [error, setError] = useState(false);

  const logOpinionData = useCallback(() => {
    if (value.length <= 16 && value.length >= 4) {
      console.log({ opinion: value });
      setError(false);
    } else {
      setError(true);
    }
  }, [value]);

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
                <OpinionStars />
              </div>
              <div className="w-full flex flex-col gap-8">
                <CstmTextarea
                  {...{ value, setValue }}
                  placeholder="Գրել կարծիքը"
                  error={error ? "min length must be 4" : ""}
                />
                <CustomBtn
                  type="button"
                  title="Ուղարկել"
                  className="!w-[254px]"
                  onClick={() => logOpinionData()}
                />
              </div>
            </div>
          </LesContainer>
        </div>
      </div>
    </>
  );
};

export const lessonPageLoader = async ({ params }: LoaderFunctionArgs) => {
  const res = await instance.get(`/posts/${params.id}?userId=1`);
  const lessonsObj = await instance.get("/posts?userId=1");
  const paramsId = params.id;
  const paramsLes = params.les;
  return { obj: res.data, lessonsObj: lessonsObj.data, paramsId, paramsLes };
};
