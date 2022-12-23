import React from "react";
import { LessonTitle } from "../../../components/screenComponents/lessonTitle/LessonTitle";
// import { LessonTitle } from "../../screenComponents/lessonTitle/LessonTitle";
import StudentLesCard from "./StudentLesCard";
import "./studentLessons.css";
const StudentLessons = () => {
  return (
    <div>
      <LessonTitle title="Իմ դասընթացները" />
      <div className="studentLessons">
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

export default StudentLessons;
