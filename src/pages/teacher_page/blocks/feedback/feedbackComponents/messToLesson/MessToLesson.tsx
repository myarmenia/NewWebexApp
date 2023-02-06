import { FC, Fragment } from "react";
import { useLoaderData } from "react-router";
import { IOtherLessonLoaderData } from "../../../../../../models/interfaces";
import { LesMessage } from "../lesMessage/LesMessage";
import styles from "./messToLesson.module.css";

export const MessToLesson: FC = () => {
  const { data } = useLoaderData() as IOtherLessonLoaderData;
  return (
    <div className={styles.messageCont_lessons}>
      <div className="mr-[18px] text-xs text-[#5F6368] border-b border-[#BEBFE4] py-3 mb-2">
        Տնային հանձնարարություններ
      </div>
      <div className={styles.messageCont_lessons_cont}>
        {data.map(({ title }, i) => (
          <Fragment key={Math.random()}>
            {i < data.length && i > 0 && (
              <hr className="bg-[#BEBFE4] w-full h-[1px]" />
            )}
            <LesMessage {...{ title }} lessonNumber={i + 1} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
