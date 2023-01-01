import { FC } from "react";
import { useSelector } from "react-redux";
import { ICalendarReducer } from "../../../../../../models/interfaces";
import { TrNum } from "./TrNum";

interface NmTbodyProps {}

export const NmTbody: FC<NmTbodyProps> = () => {
  const { datesWeek } = useSelector(
    (state: ICalendarReducer) => state.calendarList
  );
  return (
    <tbody id="tbodyNumber">
      {datesWeek.map((weekData) => {
        return <TrNum {...{ weekData }} key={Math.random()} />;
      })}
    </tbody>
  );
};
