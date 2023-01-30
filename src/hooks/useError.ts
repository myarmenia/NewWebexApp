import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

export const useError = (
  regName: string | undefined,
  error?: string | undefined
): string | undefined => {
  const formMethods = useFormContext();
  const splitedName = regName?.split(".");
  const thisError =
    splitedName && formMethods.formState.errors?.[splitedName[0]];
  const errorMessage = useMemo(() => {
    if (error) {
      return error;
    } else if (regName) {
      if (regName.includes(".")) {
        if (Boolean(formMethods.formState.errors[regName.split(".")[0]])) {
          if (
            Boolean(thisError) &&
            Array.isArray(thisError) &&
            Boolean(thisError[+splitedName![1] as number]) &&
            Boolean(
              thisError[+splitedName![1] as number][splitedName![2] as string]
                ?.message
            )
          ) {
            return thisError[+splitedName![1]][splitedName![2]]
              ?.message as string;
          } else return;
        } else return;
      } else if (Boolean(formMethods?.formState?.errors?.[regName]?.message)) {
        return formMethods?.formState?.errors?.[regName]?.message as string;
      } else return;
    }
  }, [
    error,
    regName && formMethods?.formState?.errors[regName],
    Boolean(thisError) &&
      Array.isArray(thisError) &&
      Boolean(thisError[+splitedName![1] as number]) &&
      thisError[+splitedName![1] as number][splitedName![2] as string],
  ]);

  return errorMessage;
};
