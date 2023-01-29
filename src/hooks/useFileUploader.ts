import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
} from "react";

export const useFileUploader = (
  setFile: Dispatch<SetStateAction<File>>,
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
) => {
  const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    setFile(selectedFiles?.[0]);
    onChange?.(event);
  };
  return onFileUpload;
};
