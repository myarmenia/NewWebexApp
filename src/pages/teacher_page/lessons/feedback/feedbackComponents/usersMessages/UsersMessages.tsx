import React, { FC } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { IOtherLessonLoaderData } from "../../../../../../models/interfaces";
import "./usersMessages.css";

export const UsersMessages: FC = () => {
  // ----- Loader data ------
  const { students } = useLoaderData() as IOtherLessonLoaderData;

  // const {
  //   feedbackArr: { students },
  // } = useSelector(lessonsSelectorFN);

  return (
    <div className="feedbackMessages">
      {students.map(({ id, name, username }) => {
        return (
          <Link
            to={`../student/${id}/lesson/1/task`}
            className="chatContainer"
            key={id}
          >
            <img className="chatImg" src="" />
            <div className="chatDescriptionBox">
              <div className="flex items-center gap-2">
                <p className="chatDescription1">{name}</p>
                <div className={id % 3 ? "userOnline" : ""} />
              </div>
              <p className="chatDescription2">{username}</p>
            </div>
            <span className="chatTime">11:10</span>
          </Link>
        );
      })}
    </div>
  );
};
