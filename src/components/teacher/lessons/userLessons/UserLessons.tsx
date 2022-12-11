import React, { FC } from "react";
import { lessonsArr } from "../../../lessons/lessonsStore";
import { LessonTitle } from "../../lessonTitle/LessonTitle";
import { LesPage } from "./lesPage/LesPage";
import { Lessons } from "./lessonsPage/Lessons";
import { StageLesPage } from "./stageLesPage/StageLesPage";
import "./userLessons.css";

export const UserLessons: FC = () => {
  return (
    <div className="userLessons">
      <LessonTitle
        title="Իմ դասընթացները"
        isAddLessonBtn={true}
        className="w-full justify-between"
      />
      {/* <Lessons {...{ lessonsArr }} /> */}
      <LesPage
        title="Գրաֆիկ դիզայնի դասընթաց սկսնակների համար"
        stageCount={3}
        stageLessons={12}
        lessonTime={2}
        studentsCount={3}
        keys={["Արվեստ և դիզայն", "Սկսնակների համար", "Հավաստագիր", "16+"]}
        description="Դասընթացի նկարագրությունը, Որպեսզի արդյունքի հասնելու համար, որն ավելի շատ համապատասխանի վերջնական արդյունքին, գրաֆիկական դիզայներները, Հակառակ ընդհանուր պատկերացմանը՝ Լորեմ Իպսումը այդքան էլ պատահական հավաքված տեքստ չէ։ Այս տեքստի արմատները հասնում են մ.թ.ա. 45 թ. դասական լատինական գրականություն. այն 2000 տարեկան է։ Ռիչարդ ՄքՔլինտոքը՝ Վիրջինիայի Համպդեն-Սիդնեյ քոլեջում լատիներենի մի դասախոս՝ ուսումնասիրելով ։ "
        price="65 000"
      />
      {/* <StageLesPage /> */}
    </div>
  );
};
