import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./modalContainer.module.css";

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
    <div className={[styles.modalContainer, className?.container].join(" ")}>
      <div
        className="top-0 left-0 bottom-0 right-0 absolute bg-[#090e249e]"
        onClick={onClick}
      />
      <div className={[styles.modal, className?.modal].join(" ")}>
        {children}
      </div>
    </div>
  );
};
