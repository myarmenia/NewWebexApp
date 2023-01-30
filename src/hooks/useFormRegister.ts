import { useFormContext } from "react-hook-form";

export const useFormRegister = (regName?: string | undefined) => {
  const formMethods = useFormContext();
  const register = regName ? formMethods?.register(regName) : null;
  return register;
};
