import { FC } from "react";
import { useLoaderData, useParams } from "react-router";
import { Link } from "react-router-dom";
import { IOtherLessonLoaderData } from "../../../../../../models/interfaces";
import styles from "./usersMessages.module.css";

export const UsersMessages: FC = () => {
  const { students } =
    useLoaderData() as IOtherLessonLoaderData;
    const params = useParams()
  return (
    <div className={styles.feedbackMessages}>
      {students.map(({ id, name, username }) => {
        return (
          <Link
            to={`../student/${id}/lesson/${params.id}/task`}
            className={styles.chatContainer}
            key={id}
          >
            <img className={styles.chatImg} src="" />
            <div className={styles.chatDescriptionBox}>
              <div className="flex items-center gap-2">
                <p className={styles.chatDescription1}>{name}</p>
                <div className={id % 3 ? styles.userOnline : ""} />
              </div>
              <p className={styles.chatDescription2}>{username}</p>
            </div>
            <div>11:10</div>
          </Link>
        );
      })}
    </div>
  );
};
