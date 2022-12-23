import React, { FC } from "react";

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
        isMessageFromStudent ? "student_message_box" : "teacher_message_box"
      }
    >
      <span className="text-[#817F7F] text-xs">{time}</span>
      <p
        className={`message_text ${
          isMessageFromStudent ? "student_message_text" : "teacher_message_text"
        }`}
      >
        {text}
      </p>
    </div>
  );
};
