import { FC, MouseEventHandler, ReactNode } from "react";
import "./modalContainer.css";

interface ModalContainerProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: {
    container?: string;
    modal?: string;
  };
}

export const ModalContainer: FC<ModalContainerProps> = ({
  children,
  onClick,
  className = { container: "", modal: "" },
}) => {
  return (
    <div className={"modalContainer " + className?.container}>
      <div className="w-full h-screen bg-[#090e249e]" onClick={onClick} />
      <div className={"modal " + className?.modal}>{children}</div>
    </div>
  );
};
