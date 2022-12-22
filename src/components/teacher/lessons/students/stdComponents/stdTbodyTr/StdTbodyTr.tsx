import React, { FC, ReactNode } from "react";
import "./stdTbodyTr.css";

interface StdTbodyTrProps {
  children: ReactNode;
}

export const StdTbodyTr: FC<StdTbodyTrProps> = ({ children }) => {
  return <tr className="stdTbodyTr">{children}</tr>;
};
