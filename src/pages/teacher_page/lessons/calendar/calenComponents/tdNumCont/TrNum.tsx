import React, { FC } from "react";
import { IDateDay } from "../../../../../../models/interfaces";
import { TdNum } from "./tdNum/TdNum";

interface TrNumProps {
  weekData: IDateDay[];
}
export const TrNum: FC<TrNumProps> = ({ weekData }) => {
  return (
    <tr>
      {weekData.map((day) => {
        return <TdNum {...day} key={Math.random()} />;
      })}
    </tr>
  );
};
