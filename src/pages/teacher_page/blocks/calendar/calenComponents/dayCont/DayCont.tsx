import styles from "./dayCont.module.css";
import { FC } from "react";
import filterImg from "../../../../../../assets/teacher_images/calendar/filterImg.svg";
import { FilterBtn } from "../../../../../../components/reusable";
import { getMonthAndYear } from "../../../../../../helper";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks";
import {
  toNextMonth,
  toPrevMonth,
} from "../../../../../../redux/reducers/calendarList";
import { CalTbody } from "./CalTbody";
import { CalThead } from "./CalThead";
import { ToggleMonth } from "./ToggleMonth";

export const DayCont: FC = () => {
  const { currentDate } = useAppSelector((state) => state.calendarList);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.mycontainer}>
      <div className={styles.heading}>
        <div className={styles.heading_body}>
          <div className={styles.monthBox}>
            <p className={styles.month}>{getMonthAndYear(currentDate)}</p>
            <div className={styles.arrowBox}>
              <ToggleMonth toggleMonth={() => dispatch(toPrevMonth())} />
              <ToggleMonth
                toggleMonth={() => dispatch(toNextMonth())}
                className="rotate-180"
              />
            </div>
          </div>
          <div className={styles.filter_box}>
            <FilterBtn className={styles.filter_btn} >
              Ֆիլտր
              <img src={filterImg} />
            </FilterBtn>
          </div>
        </div>
      </div>
      <div className={styles.table_container}>
        <table className="w-full border-collapse h-[inherit]">
          <CalThead />
          <CalTbody />
        </table>
      </div>
    </div>
  );
};
