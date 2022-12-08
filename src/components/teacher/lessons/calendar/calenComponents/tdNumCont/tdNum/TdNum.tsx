import React, { FC } from "react";
import { IDateDay } from "../../../Calendar";
import "./tdNum.css";

interface TdNumProps extends IDateDay {}

export const TdNum: FC<TdNumProps> = ({
  dayNumber,
  isActive,
  notCurrentMonth,
}) => {
  return (
    <td
      className={`tdNum ${notCurrentMonth ? "opacity-40 text-[#9C9C9C]" : ""}`}
    >
      {isActive ? (
        <div className="activeDay">{dayNumber}</div>
      ) : (
        <span className="tdNumeric">{dayNumber}</span>
      )}
    </td>
  );
};
