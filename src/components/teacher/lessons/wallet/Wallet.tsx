import React, { FC } from "react";
import { LessonTitle } from "../../lessonTitle/LessonTitle";
import "./wallet.css";
import { WalletCont } from "./walletComponents/walletCont/WalletCont";

export const Wallet: FC = () => {
  return (
    <div className="wallet">
      <LessonTitle title="Դրամապանակ" />
      <WalletCont balance={0} />
    </div>
  );
};
