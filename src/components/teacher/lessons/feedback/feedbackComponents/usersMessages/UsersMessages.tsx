import React, { FC, useEffect } from "react";
import { useLoaderData, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { IOtherLessonLoaderData } from "../../../../../../models/interfaces";
import "./usersMessages.css";

export const UsersMessages: FC = () => {
  const { students } = useLoaderData() as IOtherLessonLoaderData;

  return (
    <div className="feedbackMessages">
      {students.map((el, i) => {
        return (
          <Link
            to={`../student/${el.id}/lesson/1/task`}
            className="chatContainer"
            key={Math.random()}
          >
            <img className="chatImg" src="" />
            <div className="chatDescriptionBox">
              <div className="flex items-center gap-2">
                <p className="chatDescription1">{el.name}</p>
                <div className="userOnline" />
              </div>
              <p className="chatDescription2">{el.username}</p>
            </div>
            <span className="chatTime">11:10</span>
          </Link>
        );
      })}
    </div>
  );
};
