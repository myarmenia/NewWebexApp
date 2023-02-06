import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

export const TablePagItem: FC<
  PropsWithChildren &
    ButtonHTMLAttributes<HTMLButtonElement> & { isSymbol?: boolean }
> = ({ children, isSymbol = false, className = "", ...props }) => (
  <button
    {...props}
    type="button"
    className={
      className +
      " w-[30px] relative h-[30px] rounded-[7px] bg-[#898bce] text-white"
    }
  >
    <span
      className={`absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
        isSymbol
          ? "text-[40px] font-mono h-[19px] leading-4"
          : "text-[23px] font-medium h-[21px] leading-[20px]"
      }`}
    >
      {children}
    </span>
  </button>
);
