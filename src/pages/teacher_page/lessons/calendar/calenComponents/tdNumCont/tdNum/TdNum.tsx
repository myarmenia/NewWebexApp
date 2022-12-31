import React, { FC } from "react";
import { IDateDay } from "../../../../../../../models/interfaces";
import "./tdNum.css";
import { useDispatch } from "react-redux";
import { chooseDay } from "../../../../../../../redux/reducers/calendarList";
import { useNavigate } from "react-router";

interface TdNumProps extends IDateDay {}

export const TdNum: FC<TdNumProps> = ({
  dayNumber,
  isActive,
  isCurrentMonth,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const chooseWeekDay = () => {
    dispatch(chooseDay({ id: dayNumber, navigate, isCurrentMonth }));
  };

  return (
    <td
      className={`tdNum ${!isCurrentMonth ? "opacity-40 text-[#9C9C9C]" : ""}`}
      onClick={chooseWeekDay}
    >
      <div className={isActive ? "activeDay" : "tdNumeric"}>
        <span>{dayNumber}</span>
      </div>
    </td>
  );
};
