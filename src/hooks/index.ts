import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export { useError } from "./useError";
export { useFileUploader } from "./useFileUploader";
export { useFormRegister } from "./useFormRegister";
export { useAppSubmit } from "./useAppSubmit";
