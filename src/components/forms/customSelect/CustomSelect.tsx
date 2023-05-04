import { createContext, FC, useContext, useState } from "react";
import { useError } from "../../../hooks";
import { ICustomSelect } from "../../../models/forms";
import { ErrorMessage } from "../../reusable";
import styles from "./customSelect.module.css";
import { DefaultOption } from "./DefaultOption";
import { Options } from "./Options";

interface CustomSelectProps
  extends Omit<ICustomSelect, "toggleOptions" | "removeOption"> {}

export const CustomSelectContext = createContext<ICustomSelect>({} as ICustomSelect);

// if you want to make select work without react-hook-form you need to pass value and setValue props (these must be useState) to component
// if you want select to be have input for creating new options you need to pass setOptions prop to component
export const CustomSelect: FC<CustomSelectProps> = (props) => {
  const {
    className = "",
    regName,
    setOptions,
    options,
    errorClassName,
    error,
  } = props;
  const [state, setState] = useState<boolean>(false);
  const errorMessage = useError(regName, error);
  const toggleOptions = () => {
    setState((prev) => !prev);
  };
  const removeOption = (currentId: number) => {
    setOptions?.(options.filter((_, id) => id !== currentId));
  };
  return (
    <CustomSelectContext.Provider
      value={{ ...props, toggleOptions, removeOption }}
    >
      <div className="flex justify-center h-10">
        <div className={[styles.customSelect, className].join(" ")}>
          <DefaultOption />
          {state && <Options />}
          <ErrorMessage className={errorClassName}>{errorMessage}</ErrorMessage>
        </div>
      </div>
    </CustomSelectContext.Provider>
  );
};

export const useSelectContext = () => useContext(CustomSelectContext);
