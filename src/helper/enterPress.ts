import { KeyboardEvent } from "react";

export const enterPress = <T extends HTMLTextAreaElement | HTMLInputElement>(
  e: KeyboardEvent<T>,
  callback: () => void
): void => {
  if (e.key === "Enter") {
    callback();
    e.preventDefault();
  }
};

