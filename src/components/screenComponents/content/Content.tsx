import { FC, PropsWithChildren } from "react";
import styles from "./content.module.css";

export const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles.myContainer}>
      <div className={styles.content}>{children}</div>
    </main>
  );
};
