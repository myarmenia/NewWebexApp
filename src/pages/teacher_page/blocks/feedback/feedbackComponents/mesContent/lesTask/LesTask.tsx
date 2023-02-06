import { FC } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import { IOtherLessonLoaderData } from "../../../../../../../models/interfaces";
import { ExtraMaterials } from "../../../../userLessons/stageLesPage/extraMaterials/ExtraMaterials";
import { LesContainer } from "../../../../userLessons/userLesComponents/LesContainer";
import styles from "./lesTask.module.css";

export const LesTask: FC = () => {
  const { data, params } = useRouteLoaderData(
    "student-feedback"
  ) as IOtherLessonLoaderData;
  const { title, body, id } = data[params.id - 1];
  return (
    <div className={styles.messageCont_cont}>
      <div className="bg-white h-full rounded-[15px]">
        <LesContainer
        // className="cont01"
        >
          <p className="border-b border-[#BEBFE4] text-[10px] font-semibold pb-4">
            <span className="font-normal">Դաս {id}։</span>
            {title}
          </p>
          <div className="bg-[gray] w-[217px] h-[96px]" />
          <p className="text-xs">{body}</p>
          <div className="w-[30%] h-[1px] bg-[#BEBFE4]" />
          <ExtraMaterials items={["png", "img", "docx"]} />
          <Link to="../homework" className={styles.toHomeWork_link}>
            Տնային աշխատանք
          </Link>
        </LesContainer>
      </div>
    </div>
  );
};
