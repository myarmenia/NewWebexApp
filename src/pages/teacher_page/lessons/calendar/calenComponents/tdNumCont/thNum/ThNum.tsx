import React, { FC } from "react";
import './thNum.css'

interface ThNumProps {
  weeekName: string;
}

export const ThNum: FC<ThNumProps> = ({ weeekName }) => {
  return (
    <th className="thNumeric">
      {weeekName}
    </th>
  );
};
