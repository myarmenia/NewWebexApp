import { ChangeEvent, ChangeEventHandler, useState } from "react";

export const useFileUploader = (
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
): [
  File,
  (event: ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<File>>
] => {
  const [file, setFile] = useState<File>(null!);
  const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    if (!!selectedFiles?.[0]) {
      setFile(selectedFiles?.[0]);
      onChange?.(event);
    }
  };
  return [file, onFileUpload, setFile];
};

