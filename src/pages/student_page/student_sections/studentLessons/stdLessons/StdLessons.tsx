import React, { FC } from "react";
import "./stdLessons.css";
import { LessonTitle } from "../../../../../components/reusable/lessonTitle/LessonTitle";
import StudentLesCard from "./StudentLesCard";

export const StdLessons: FC = () => {
  return (
    <div>
      <LessonTitle title="Իմ դասընթացները" />
      <div className="student_lessonsBoxes">
        <StudentLesCard
          title="Գրաֆիկ դիզայնի դասընթաց սկսնակների համար"
          keys={[
            "Արվեստ և դիզայն",
            "Սկսնակների համար",
            "Հավաստագիր",
            "16+",
            "Ավարտական քննություն",
            "165 ժամ",
          ]}
          price="65 000 դրամ"
          description="Դասընթացի նկարագրությունը, Որպեսզի արդյունքի հասնելու համար, որն ավելի շատ համապատասխանի վերջնական արդյունքին, գրաֆիկական դիզայներները, "
          studentsCount={3}
        />
        <StudentLesCard
          title="Գրաֆիկ դիզայնի դասընթաց սկսնակների համար"
          keys={[
            "Արվեստ և դիզայն",
            "Սկսնակների համար",
            "Հավաստագիր",
            "16+",
            "Ավարտական քննություն",
            "165 ժամ",
          ]}
          price="65 000 դրամ"
          description="Դասընթացի նկարագրությունը, Որպեսզի արդյունքի հասնելու համար, որն ավելի շատ համապատասխանի վերջնական արդյունքին, գրաֆիկական դիզայներները, "
          studentsCount={3}
        />
      </div>
    </div>
  );
};
