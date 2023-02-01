import React, { FC } from "react";
import { IChatMessage } from "../../../../../../../models/chat";
import styles from "./mesMessages.module.css";
interface MessageBoxProps extends IChatMessage {
  isMessageFromStudent?: boolean;
}

export const MessageBox: FC<MessageBoxProps> = ({
  title,
  time,
  isMessageFromStudent,
}) => {
  return (
    <div
      className={
        isMessageFromStudent
          ? styles.student_message_box
          : styles.teacher_message_box
      }
    >
      <span className="text-[#817F7F] text-xs">
        {typeof time === "string"
          ? time
          : `${time.getHours()}:${time.getMinutes()}`}
      </span>
      <p
        className={`${styles.message_text} ${
          isMessageFromStudent
            ? styles.student_message_text
            : styles.teacher_message_text
        }`}
      >
        {title}
      </p>
    </div>
  );
};
