import React from "react";

interface ItemProps {
  option: string;
  state: boolean;
  setState: (state: boolean) => void;
}
export const Item: React.FC<ItemProps> = ({
  option,
  state,
  setState,
}) => {
  return (
    <div
      className="dropItem"
      onClick={() => {
        setState(!state);
      }}
    >
      {option}
    </div>
  );
};
