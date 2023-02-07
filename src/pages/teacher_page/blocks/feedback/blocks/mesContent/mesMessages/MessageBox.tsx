import { FC } from "react";
import { addZero } from "../../../../../../../helper";
import { IChatMessage } from "../../../../../../../models/chat";
import styles from "./mesMessages.module.css";
interface MessageBoxProps extends IChatMessage {
  fromStudent?: boolean;
}

export const MessageBox: FC<MessageBoxProps> = ({
  title,
  time,
  fromStudent,
}) => {
  return (
    <div
      className={
        fromStudent ? styles.student_message_box : styles.teacher_message_box
      }
    >
      <span className="text-[#817F7F] text-xs">
        {typeof time === "string"
          ? time
          : `${addZero(time.getHours())}:${addZero(time.getMinutes())}`}
      </span>
      <p
        className={`${styles.message_text} ${
          fromStudent
            ? styles.student_message_text
            : styles.teacher_message_text
        }`}
      >
        {title}
      </p>
    </div>
  );
};
