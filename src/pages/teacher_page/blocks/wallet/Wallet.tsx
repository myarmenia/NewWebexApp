import { FC } from "react";
import styles from "./wallet.module.css";
import { LessonTitle } from "../../../../components/reusable";
import { WalletCont } from "./walletComponents/walletCont/WalletCont";

export const Wallet: FC = () => {
  return (
    <div className={styles.wallet}>
      <LessonTitle title="Դրամապանակ" />
      <WalletCont />
    </div>
  );
};
