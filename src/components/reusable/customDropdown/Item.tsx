import React from "react";

interface ItemProps {
  option: string;
  setState: (state: boolean) => void;
}
export const Item: React.FC<ItemProps> = ({ option, setState }) => {
  return (
    <div className="dropItem" onClick={() => setState(false)}>
      {option}
    </div>
  );
};
