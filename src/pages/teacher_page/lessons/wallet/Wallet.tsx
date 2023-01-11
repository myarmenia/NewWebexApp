import { FC } from "react";
import "./wallet.css";
import { LessonTitle } from "../../../../components/reusable";
import { WalletCont } from "./walletComponents/walletCont/WalletCont";

export const Wallet: FC = () => {
  return (
    <div className="wallet">
      <LessonTitle title="Դրամապանակ" />
      <WalletCont balance={0} />
    </div>
  );
};
