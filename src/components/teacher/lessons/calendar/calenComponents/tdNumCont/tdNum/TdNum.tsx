import React, { FC } from "react";
import { IDateDay } from "../../../../../../../models/interfaces";
import "./tdNum.css";
import { useDispatch } from "react-redux";
import { chooseDay } from "../../../../../../../redux/reducers/calendarList";

interface TdNumProps extends IDateDay {}

export const TdNum: FC<TdNumProps> = ({
  dayNumber,
  isActive,
  notCurrentMonth,
}) => {
  const dispatch = useDispatch();

  return (
    <td
      className={`tdNum ${notCurrentMonth ? "opacity-40 text-[#9C9C9C]" : ""}`}
      onClick={() => dispatch(chooseDay(dayNumber))}
    >
      <div className={isActive ? "activeDay" : "tdNumeric"}>
        <span>{dayNumber}</span>
      </div>
    </td>
  );
};
