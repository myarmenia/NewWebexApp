import { useMemo } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export const useError = (
  error: string | undefined,
  regName: string | undefined,
  methods: UseFormReturn<FieldValues, any>
) => {
  const errorMessage = useMemo(() => {
    return (
      error ||
      (regName && methods?.formState?.errors[regName]?.message!.toString())
    );
  }, [error, methods?.formState?.errors]);

  return errorMessage;
};
