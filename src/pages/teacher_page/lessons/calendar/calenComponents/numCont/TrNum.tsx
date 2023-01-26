import { FC } from "react";
import { IDateDay } from "../../../../../../models/interfaces";
import { TdNum } from "./tdNum/TdNum";

interface TrNumProps {
  weekData: IDateDay[];
}
export const TrNum: FC<TrNumProps> = ({ weekData }) => {
  return (
    <tr>
      {weekData.map((day) => (
        <TdNum {...day} key={Math.random()} />
      ))}
    </tr>
  );
};
