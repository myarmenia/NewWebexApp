import { FC, ReactNode } from "react";

interface LesContainerProps {
  children: ReactNode;
  className?: string;
}

export const LesContainer: FC<LesContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={"w-[94%] mx-auto py-5 flex flex-col gap-5 " + className}>
      {children}
    </div>
  );
};
