import React, { FC } from "react";
import "./wkTbody.css";
import { weekScheduleTime, weekSheduleEvents } from "../../../../../../helper";
import { WkTd } from "../wkTd/WkTd";

export const WkTbody: FC = () => {
  return (
    <tbody>
      {weekScheduleTime.map((el, col) => (
        <tr key={Math.random()}>
          <WkTd>{el}</WkTd>
          {Array.from({ length: 7 }).map((item, row) => {
            for (let event of weekSheduleEvents) {
              const eventTime =
                typeof event.evTime === "string"
                  ? parseInt(event.evTime)
                  : event.evTime!;
              if (event.weekday! - 1 === row && eventTime - 8 === col) {
                return (
                  <WkTd hasEvent={true} {...{ event }} key={Math.random()} />
                );
              }
            }

            return <WkTd key={Math.random()} />;
          })}
        </tr>
      ))}
    </tbody>
  );
};
