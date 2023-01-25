import { FC, ReactNode, useEffect, useRef } from "react";
interface ErrorMessageProps {
  children?: ReactNode;
  isParentRelative?: boolean;
  className?: string;
}
export const ErrorMessage: FC<ErrorMessageProps> = ({
  children,
  isParentRelative,
  className,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (isParentRelative) {
      ref.current?.parentElement?.classList.add("relative");
    }
  }, []);
  return (
    <p
      ref={ref}
      className={
        className +
        " text-[red] text-xs leading-3 -translate-x-1/2 whitespace-nowrap w-full left-[53%] -bottom-3 absolute"
      }
    >
      {children}
    </p>
  );
};
