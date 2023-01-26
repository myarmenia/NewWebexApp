import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import { TrNum } from "./TrNum";

export const NmTbody: FC = () => {
  const { datesWeek } = useAppSelector((state) => state.calendarList);
  return (
    <tbody className="tbodyNumber">
      {datesWeek.map((weekData) => (
        <TrNum {...{ weekData }} key={Math.random()} />
      ))}
    </tbody>
  );
};
