import "./wkTbody.css";
import { FC } from "react";
import { weekScheduleTime, weekSheduleEvents } from "../../../../../../helper";
import { WkTd } from "../WkTd";

const strOrNumber = (e: string | number): number =>
  typeof e === "string" ? parseInt(e) : e;

export const WkTbody: FC = () => {
  return (
    <tbody>
      {weekScheduleTime.map((el, col) => (
        <tr key={Math.random()}>
          <WkTd>{el}</WkTd>
          {Array.from({ length: 7 }).map((item, row) => {
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
