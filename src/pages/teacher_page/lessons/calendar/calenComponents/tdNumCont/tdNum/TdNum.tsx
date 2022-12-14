import { FC } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../../../../hooks";
import { IDateDay } from "../../../../../../../models/interfaces";
import { chooseDay } from "../../../../../../../redux/reducers/calendarList";
import "./tdNum.css";

interface TdNumProps extends IDateDay {}

export const TdNum: FC<TdNumProps> = ({
  dayNumber,
  isActive,
  isCurrentMonth,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
