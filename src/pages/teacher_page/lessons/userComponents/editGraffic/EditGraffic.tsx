import { FC, useState } from "react";
import { LessonTitle } from "../../../../../components/reusable";
import { weekDays_long } from "../../../../../helper";
import styles from "./editGraffic.module.css";
import GrafficChild from "./GrafficChild";
interface IGrafficLesson {
  monday: IStartEnd[];
  tuesday: IStartEnd[];
  wednesday: IStartEnd[];
  thursday: IStartEnd[];
  friday: IStartEnd[];
  saturday: IStartEnd[];
  sunday: IStartEnd[];
}
export interface IStartEnd {
  start: string;
  end: string;
}
const arr: IGrafficLesson = {
  monday: [
    {
      start: "11:44",
      end: "13:55",
    },
    {
      start: "14:56",
      end: "18:35",
    },
    {
      start: "14:56",
      end: "18:35",
    },
  ],
  tuesday: [
    {
      start: "16:38",
      end: "14:56",
    },
  ],
  wednesday: [
    {
      start: "14:56",
      end: "18:35",
    },
    {
      start: "16:38",
      end: "14:56",
    },
    {
      start: "14:56",
      end: "18:35",
    },
  ],
  thursday: [
    {
      start: "14:56",
      end: "18:35",
    },
  ],
  friday: [
    {
      start: "14:56",
      end: "18:35",
    },
  ],
  saturday: [
    {
      start: "14:56",
      end: "18:35",
    },
  ],
  sunday: [
    {
      start: "14:56",
      end: "18:35",
    },
  ],
};
export const EditGraffic: FC = () => {
  return (
    <>
      <LessonTitle title="Դասավանդման գրաֆիկ" editIsActive={true} />
      <div className={styles.editGraffic}>
        <div className={styles.editGrafficChild}>
          {Object.values(arr).map((el, index) => {
            return (
              <GrafficChild
                weekDay={weekDays_long[index]}
                times={el}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
