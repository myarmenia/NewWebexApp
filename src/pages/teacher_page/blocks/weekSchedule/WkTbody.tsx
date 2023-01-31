import { FC } from "react";
import {
  strOrNumber,
  weekScheduleTime,
  weekSheduleEvents,
} from "../../../../helper";
import { WkTd } from "./WkTd";

export const WkTbody: FC = () => {
  return (
    <tbody>
      {weekScheduleTime.map((el, col) => (
        <tr key={Math.random()}>
          <WkTd>{el}</WkTd>
          {Array.from({ length: 7 }).map((_, row) => {
            for (let event of weekSheduleEvents) {
              if (
                event.weekday! - 1 === row &&
                strOrNumber(event.evTime!) - 8 === col
              ) {
                return <WkTd {...{ event }} key={Math.random()} />;
              }
            }
            return <WkTd key={Math.random()} />;
          })}
        </tr>
      ))}
    </tbody>
  );
};
