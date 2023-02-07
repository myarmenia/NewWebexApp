import { SubmitFunction, useSubmit } from "react-router-dom";

export const useAppSubmit = (): SubmitFunction => {
  const submit = useSubmit();
  return (
    target: Parameters<SubmitFunction>[0],
    options: Parameters<SubmitFunction>[1]
  ) => submit(target, { ...options, encType: "multipart/form-data" });
};
