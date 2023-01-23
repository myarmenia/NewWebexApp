import { FC, useState } from "react";
import "./stdLesPage.css";
import { LoaderFunction, LoaderFunctionArgs } from "react-router";
import { CstmTextarea, CustomBtn } from "../../../../../components/forms";
import { LessonTitle } from "../../../../../components/reusable";
import { LessonProps } from "../../../../../models/interfaces";
import { instance } from "../../../../../request";
import { LesContainer } from "../../../../teacher_page/lessons/userLessons/userLesComponents/LesContainer";
import { LesPTitle } from "../../../../teacher_page/lessons/userLessons/userLesComponents/lesPTitle/LesPTitle";
import { LesImageBox } from "./lesImageBox/LesImageBox";
import { OpinionStars } from "./opinionStars/OpinionStars";
import { StdLesCases } from "./stdLesCases/StdLesCases";
import { StdLesStages } from "./stdLesStages/StdLesStages";

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
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState(false);

  const logOpinionData = () => {
    if (value.length <= 16 && value.length >= 4) {
      console.log({ opinion: value });
      setError(false);
    } else {
      setError(true);
    }
  };

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
                  placeholder="Գրել կարծիքը"
                  error={error ? "min length must be 4" : ""}
                  onChange={(e) => setValue(e.target.value)}
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

export const stdLessonPageLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const lessonsObj = await instance.get("/posts?userId=1");

  return { lessonsObj: lessonsObj.data };
};
