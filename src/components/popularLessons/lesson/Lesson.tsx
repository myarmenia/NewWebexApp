import React from "react";
import "./lesson.css";
import { LessonProps } from "../../../models/interfaces";

// for video example
import ReactPlayer from "react-player";

export const Lesson: React.FC<LessonProps> = ({
  description,
  title,
  price,
  video,
  keys,
}) => {
  return (
    <div className="lesson">
      <div className="video">
        {/* <ReactPlayer
          url={video}
          width="100%"
          height="auto"
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        /> */}
      </div>
      <p className="lessonTitle">{title}</p>
      <div className="keys">
        {keys.map((key, index) => (
          <div className="key" key={index}>
            {key}
          </div>
        ))}
      </div>
      <p className="lessonDescription">{description}</p>
      <p className="lessonPrice">{price}</p>
      <button className="seeMoreBtn">Ավելին</button>
    </div>
  );
};
