import React from "react";
import { IHeaderDropDownOption } from "../../../models/interfaces";
import { Item } from "./Item";

interface ItemsProps {
  setState: (state: boolean) => void;
  options: IHeaderDropDownOption[];
}

export const Items: React.FC<ItemsProps> = ({ setState, options }) => {
  return (
    <div className="dropItems">
      <div className="overflow-hidden rounded-2xl">
        <div className="dropItemsCont">
          {options.map((option, id) => (
            <Item {...{ option }} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};
