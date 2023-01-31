import React, { FC } from "react";
import styles from "./mesMessages.module.css";
interface MessageBoxProps {
  text: string;
  time: string;
  isMessageFromStudent?: boolean;
}

export const MessageBox: FC<MessageBoxProps> = ({
  text,
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
      <span className="text-[#817F7F] text-xs">{time}</span>
      <p
        className={`${styles.message_text} ${
          isMessageFromStudent
            ? styles.student_message_text
            : styles.teacher_message_text
        }`}
      >
        {text}
      </p>
    </div>
  );
};
