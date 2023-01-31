import { FC } from "react";
import { useAppSelector } from "../../../../../../hooks";
import { TdNum } from "./tdNum/TdNum";

export const NmTbody: FC = () => {
  const { datesWeek } = useAppSelector((state) => state.calendarList);
  return (
    <tbody className="tbodyNumber">
      {datesWeek.map((weekData) => (
        <tr key={Math.random()}>
          {weekData.map((day) => (
            <TdNum {...day} key={Math.random()} />
          ))}
        </tr>
      ))}
    </tbody>
  );
};
