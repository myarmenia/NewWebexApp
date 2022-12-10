import React, { FC } from "react";
import "./lesCases.css";
import "../../userLesComponents/lesBox/lesBox.css";
import { LesBoxProps } from "../../userLesComponents/lesBox/LesBox";

interface LesCasesProps extends LesBoxProps {}

export const LesCases: FC<LesCasesProps> = ({
  studentsCount,
  price,
  keys,
  description,
}) => {
  return (
    <div className="lesCases">
      <span className="studentsCount">{studentsCount} ուսանող</span>
      <p className="lesBox_price !text-[36px]">{price}</p>
      <div className="keys">
        {keys.map((key, index) => (
          <div className="key" key={index}>
            {key}
          </div>
        ))}
      </div>
      <p className="lesBox_description !leading-[22px] !text-sm">{description}</p>
    </div>
  );
};
