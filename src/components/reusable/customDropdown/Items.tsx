import React from "react";
import { Item } from "./Item";

interface ItemsProps {
  state: boolean;
  setState: (state: boolean) => void;
  options: string[];
  onPointer: (e: boolean) => void;
}

export const Items: React.FC<ItemsProps> = ({
  state,
  setState,
  options,
  onPointer,
}) => {
  return (
    <div
      className="dropItems"
      onMouseEnter={() => onPointer(true)}
      onMouseLeave={() => onPointer(false)}
    >
      <div className="dropItemsCont">
        {options.map((option, id) => (
          <Item option={option} key={id} state={state} setState={setState} />
        ))}
      </div>
    </div>
  );
};
