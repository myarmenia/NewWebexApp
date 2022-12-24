import React, { FC } from "react";
import "./tdNumCont.css";
import { NmTbody } from "./nmTbody/NmTbody";
import { NmThead } from "./nmThead/NmThead";

interface TdNumContProps {}

export const TdNumCont: FC<TdNumContProps> = ({}) => {
  return (
    <div id="CalendarBody_NumericContainer">
      <div id="CalendarNumbers">
        <table id="tableNumber">
          <NmThead />
          <NmTbody />
        </table>
      </div>
    </div>
  );
};
