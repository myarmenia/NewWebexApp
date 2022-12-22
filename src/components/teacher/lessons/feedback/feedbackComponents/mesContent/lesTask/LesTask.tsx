import React, { FC } from "react";
import "./lesTask.css";
import { ExtraMaterials } from "../../../../userLessons/stageLesPage/extraMaterials/ExtraMaterials";
import { LesContainer } from "../../../../userLessons/userLesComponents/lesContainer/LesContainer";
import { Link, useLoaderData } from "react-router-dom";
import { IOtherLessonLoaderData } from "../../../../../../../models/interfaces";

export const LesTask: FC = () => {
  const { data, params } = useLoaderData() as IOtherLessonLoaderData;
  const { title, body } = data[params.id - 1];

  return (
    <div className="messageCont_cont">
      <div className="bg-white h-full rounded-[15px]">
        <LesContainer className="cont01">
          <p className="border-b border-[#BEBFE4] text-[10px] font-semibold pb-4">
            <span className="font-normal">Դաս {params.id}։</span> {title}
          </p>
          <div className="bg-[gray] w-[217px] h-[96px]" />
          <p className="text-xs">{body}</p>
          <div className="w-[30%] h-[1px] bg-[#BEBFE4]" />
          <ExtraMaterials items={["png", "img", "docx"]} />
          <Link to="../homework" className="toHomeWork_link">
            Տնային աշխատանք
          </Link>
        </LesContainer>
      </div>
    </div>
  );
};
