import { createContext, FC, useContext, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useError } from "../../../hooks";
import { ICustomSelect } from "../../../models/interfaces";
import { ErrorMessage } from "../../reusable";
import styles from "./customSelect.module.css";
import { DefaultOption } from "./DefaultOption";
import { Options } from "./Options";

interface CustomSelectProps
  extends Pick<
    ICustomSelect,
    | "options"
    | "className"
    | "regName"
    | "placeholder"
    | "setOptions"
    | "error"
    | "setValue"
    | "value"
    | "img"
    | "errorClassName"
  > {}

export const CustomSelectContext = createContext<ICustomSelect>(null!);

// if you want to make select work without react-hook-form you need to pass value and setValue useState to component
export const CustomSelect: FC<CustomSelectProps> = (props) => {
  const {
    className = "",
    regName,
    setOptions,
    options,
    errorClassName,
  } = props;
  const [state, setState] = useState<boolean>(false);
  const formMethods = useFormContext();
  const toggleOptions = () => {
    setState((prev) => !prev);
  };
  const removeOption = (currentId: number) => {
    setOptions?.(options.filter((option, id) => id !== currentId));
  };
  const errorMessage = useError(regName, formMethods);
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
