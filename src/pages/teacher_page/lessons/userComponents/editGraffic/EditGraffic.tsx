import React, { useState } from "react";
import { LessonTitle } from "../../../../../components/reusable/lessonTitle/LessonTitle";
import CreateGraffic from "../CreateGraffic";
import "./editGraffic.css";
import GrafficChild from "./GrafficChild";
const arr: any = {
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
      start: "14:56",
      end: "18:12",
    },
    {
      start: "14:56",
      end: "18:12",
    },
  ],
  thursday: [
    {
      start: "16:38",
      end: "16:38",
    },
  ],
  friday: [
    {
      start: "16:38",
      end: "16:38",
    },
  ],
  saturday: [
    {
      start: "19:35",
      end: "16:38",
    },
  ],
  sunday: [
    {
      start: "16:38",
      end: "16:38",
    },
  ],
};
const EditGraffic: React.FC = () => {
  const [value, setValue] = useState(arr);
  console.log(value?.wednesday);
  console.log(value);
  const monday: any = value?.monday?.map((el: any) => {
    return <div>{`${el.start} - ${el.end}`}</div>;
  });
  const tuesday: any = value?.tuesday?.map((el: any) => {
    return <div>{`${el.start} - ${el.end}`}</div>;
  });
  const wednesday: any = value?.wednesday?.map((el: any) => {
    return <div>{`${el.start} - ${el.end}`}</div>;
  });
  const thursday: any = value?.thursday?.map((el: any) => {
    return <div>{`${el.start} - ${el.end}`}</div>;
  });
  const friday: any = value?.friday?.map((el: any) => {
    return <div>{`${el.start} - ${el.end}`}</div>;
  });
  const saturday: any = value?.saturday?.map((el: any) => {
    return <div>{`${el.start} - ${el.end}`}</div>;
  });
  const sunday: any = value?.sunday?.map((el: any) => {
    return <div>{`${el.start} - ${el.end}`}</div>;
  });
  return (
    <>
      <LessonTitle title="Դասավանդման գրաֆիկ" editIsActive={true} />
      <div className="editGraffic">
        <div className="editGrafficChild">
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

export default EditGraffic;
