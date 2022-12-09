import React, { FC, ReactNode } from "react";
import { IWeekEvent } from "../../../../../../models/interfaces";

interface WkTdProps {
  event?: IWeekEvent;
  hasEvent?: boolean;
  children?: ReactNode;
}

export const WkTd: FC<WkTdProps> = ({ event, hasEvent, children }) => {
  return (
    <td className="weekSchTd" key={Math.random()}>
      {hasEvent && (
        <div
          className="wkEventBox"
          style={{
            height: event?.lessonDuration! * 43 - 10 + "px",
          }}
        >
          <p>{event?.title}</p>
        </div>
      )}
      {children}
    </td>
  );
};
