import { KeyboardEvent } from "react";

export const enterPress = (
  e: KeyboardEvent<HTMLInputElement>,
  callback: () => void
): void => {
  if (e.key === "Enter") {
    callback();
    e.preventDefault();
  }
};
