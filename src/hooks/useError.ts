import { useMemo } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export const useError = (
  error: string | undefined,
  regName: string | undefined,
  formMethods: UseFormReturn<FieldValues, any>
) => {
  const errorMessage = useMemo(() => {
    return (
      error ||
      (regName &&
        formMethods?.formState?.errors[regName] &&
        formMethods?.formState?.errors[regName]?.message!.toString())
    );
  }, [error, regName && formMethods?.formState?.errors[regName]]);

  return errorMessage;
};
