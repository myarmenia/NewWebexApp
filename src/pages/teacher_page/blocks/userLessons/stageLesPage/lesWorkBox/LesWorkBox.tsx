import React, { FC } from "react";
import "./lesWorkBox.css";
import { LesContainer } from "../../userLesComponents/LesContainer";
import { ExtraMaterials } from "../extraMaterials/ExtraMaterials";

export interface LesWorkBoxProps {
  title: string;
  lesNumber?: number;
  videoUrl?: string;
  description: string;
  extMats: string[];
  className?: {
    title?: string;
  };
}

export const LesWorkBox: FC<LesWorkBoxProps> = ({
  title,
  lesNumber,
  videoUrl,
  description,
  extMats,
  className = { title: "" },
}) => {
  return (
    <LesContainer className="lessonWork">
      <p
        className={
          "font-semibold text-sm first-letter:capitalize inline " +
          className?.title
        }
      >
        <span className="font-normal mr-2 float-left">
          {lesNumber && `Դաս ${lesNumber}:`}
        </span>
        <span>{title}</span>
      </p>
      {/* <iframe
                  width="100%"
                  height="auto  "
                  src={videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe> */}
      <div className="w-[217px] h-[96px] bg-[gray] my-4"></div>
      <p className="text-xs leading-5">{description}</p>
      <hr className="stageLesPage_hr !w-[149px]" />
      <ExtraMaterials items={extMats} />
    </LesContainer>
  );
};
