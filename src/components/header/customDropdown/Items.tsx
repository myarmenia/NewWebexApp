import React from "react";
import { Item } from "./Item";

interface ItemsProps {
  state: boolean;
  setState: (state: boolean) => void;
  options: string[];
}

export const Items: React.FC<ItemsProps> = ({ state, setState, options }) => {
  return (
    <div className="options">
      {options.map((option, id) => (
        <Item option={option} key={id} state={state} setState={setState} />
      ))}
    </div>
  );
};
