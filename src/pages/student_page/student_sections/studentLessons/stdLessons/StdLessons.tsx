import React, { FC } from "react";
import styles from "./stdLessons.module.css";
import { LessonTitle } from "../../../../../components/reusable";
import StudentLesCard from "./StudentLesCard";

export const StdLessons: FC = () => {
  return (
    <div>
      <LessonTitle title="Իմ դասընթացները" />
      <div className="flex justify-between items-center gap-[40px] pb-5 px-4 ">
          <input placeholder="Փնտրել" className="h-[38px] w-[50%] rounded-[26px] px-5 py-2 bg-[#F6F7FF]" />
          <select name="" id="" className="h-[38px] w-[50%] rounded-[26px] px-5 py-2 pr-4 bg-[#F6F7FF]">
            <option value="">Կատեգորիա</option>
            <option value="">bbbbbbbbbbbbbbbbbbbbbbbbbb</option>
          </select>
        </div>
        
      <div className={styles.student_lessonsBoxes}>
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
