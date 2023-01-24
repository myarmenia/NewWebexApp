import { FC, useState } from "react";
import { LessonTitle } from "../../../../../components/reusable";
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
interface IStartEnd {
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
  const [value, setValue] = useState(arr);
  console.log(value?.wednesday);
  console.log(value);
  const monday: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >[] = value?.monday?.map((el: IStartEnd) => {
    return <div key={el.start}>{`${el.start} - ${el.end}`}</div>;
  });
  const tuesday: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >[] = value?.tuesday?.map((el: IStartEnd) => {
    return <div key={el.end}>{`${el.start} - ${el.end}`}</div>;
  });
  const wednesday: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >[] = value?.wednesday?.map((el: IStartEnd) => {
    return <div key={el.start}>{`${el.start} - ${el.end}`}</div>;
  });
  const thursday: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >[] = value?.thursday?.map((el: IStartEnd) => {
    return <div key={el.end}>{`${el.start} - ${el.end}`}</div>;
  });
  const friday: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >[] = value?.friday?.map((el: IStartEnd) => {
    return <div key={el.end}>{`${el.start} - ${el.end}`}</div>;
  });
  const saturday: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >[] = value?.saturday?.map((el: IStartEnd) => {
    return <div key={el.end}>{`${el.start} - ${el.end}`}</div>;
  });
  const sunday: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >[] = value?.sunday?.map((el: IStartEnd) => {
    return <div key={el.end}>{`${el.start} - ${el.end}`}</div>;
  });

  return (
    <>
      <LessonTitle title="Դասավանդման գրաֆիկ" editIsActive={true} />
      <div className={styles.editGraffic}>
        <div className={styles.editGrafficChild}>
          <GrafficChild weekDay="Երկուշաբթի" times={monday} />
          <GrafficChild weekDay="Երեքշաբթի" times={tuesday} />
          <GrafficChild weekDay="Չորեքշաբթի" times={wednesday} />
          <GrafficChild weekDay="Հինգշաբթի" times={thursday} />
          <GrafficChild weekDay="Ուրբաթ" times={friday} />
          <GrafficChild weekDay="Շաբաթ" times={saturday} />
          <GrafficChild weekDay="Կիրակի" times={sunday} />
        </div>
      </div>
    </>
  );
};
