import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { IDateDay } from "../../../../../../../models/interfaces";
import { chooseDay } from "../../../../../../../redux/reducers/calendarList";
import "./tdNum.css";

interface TdNumProps extends IDateDay {}

export const TdNum: FC<TdNumProps> = ({
  dayNumber,
  isActive,
  isCurrentMonth,
  currentDayEvents,
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
