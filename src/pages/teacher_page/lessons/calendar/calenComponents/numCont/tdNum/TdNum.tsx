import { FC } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../../../../hooks";
import { IDateDay } from "../../../../../../../models/interfaces";
import { chooseDay } from "../../../../../../../redux/reducers/calendarList";
import styles from "./tdNum.module.css";

interface TdNumProps extends IDateDay {}

export const TdNum: FC<TdNumProps> = ({ date, isActive, isCurrentMonth }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const chooseWeekDay = () => {
    dispatch(chooseDay({ id: date.getDate(), navigate, isCurrentMonth }));
  };
  return (
    <td
      className={`${styles.tdNum} ${
        !isCurrentMonth ? "opacity-40 text-[#9C9C9C]" : ""
      }`}
      onClick={chooseWeekDay}
    >
      <div className={isActive ? styles.activeDay : styles.tdNumeric}>
        <span>{date.getDate()}</span>
      </div>
    </td>
  );
};