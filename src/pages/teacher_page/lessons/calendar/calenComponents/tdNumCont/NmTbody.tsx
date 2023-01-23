import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import { TrNum } from "./TrNum";

interface NmTbodyProps {}

export const NmTbody: FC<NmTbodyProps> = () => {
  const { datesWeek } = useAppSelector((state) => state.calendarList);
  return (
    <tbody className="tbodyNumber">
      {datesWeek.map((weekData) => {
        return <TrNum {...{ weekData }} key={Math.random()} />;
      })}
    </tbody>
  );
};
