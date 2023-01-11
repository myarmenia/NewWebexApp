import React, { FC } from "react";
import "./tdNumCont.css";
import { NmTbody } from "./NmTbody";
import { NmThead } from "./NmThead";

interface TdNumContProps {}

export const TdNumCont: FC<TdNumContProps> = ({}) => {
  return (
    <div id="numericContainer">
      <div id="CalendarNumbers">
        <table id="tableNumber">
          <NmThead />
          <NmTbody />
        </table>
      </div>
    </div>
  );
};
