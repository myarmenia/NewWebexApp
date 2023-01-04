import "./customDropdown.css";
import React, { useState } from "react";
import { Items } from "./Items";
import { DropdownTitle } from "./DropdownTitle";

interface CustomDropdownProps {
  title: string;
  options: string[];
  className?: string;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  title,
  options,
  className,
}) => {
  const [state, setState] = useState<boolean>(false);
  return (
    <div
      className="flex justify-center"
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      <div className={`customDropdown ${className}`}>
        <DropdownTitle {...{ rotateClass: state, title }} />
        {state && <Items {...{ state, setState, options }} />}
      </div>
    </div>
  );
};
