import { Dispatch, SetStateAction } from "react";

export interface MyInputProps {
  regName?: string;
  img?: string;
  className?: string;
  boxClassName?: string;
  error?: string;
  errorClassName?: string;
}

export interface ICustomSelect {
  options: string[];
  placeholder: string;
  regName?: string;
  error?: string;
  setOptions?: Dispatch<SetStateAction<string[]>>; // for mutable select
  toggleOptions: () => void;
  removeOption?: (currentId: number) => void;
  className?: string; // ----------------------
  setValue?: Dispatch<SetStateAction<string>>;
  value?: string;
  img?: string;
  errorClassName?: string;
}
