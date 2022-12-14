import React, { FC, useState } from "react";
import "./walletCont.css";
import fillBalanceImg from "../../../../../../images/Teacher/Exam/Group 1552.svg";
import editPenImg from "../../../../../../images/Teacher/UserLessons/editGray.svg";
import { AttachedCard } from "../attachedCard/AttachedCard";
import { WalTbody } from "../walTbody/WalTbody";
import { WalThead } from "../walThead/WalThead";

interface WalletContProps {
  balance: number;
}

export const WalletCont: FC<WalletContProps> = ({ balance }) => {
  const [transactionHistory, setTransactionHistory] = useState<boolean>(true);
  const [tarifPlanName, setTarifPlanState] = useState<string>(
    "Սակագնային պլանի անվանումը"
  );
  return (
    <div className="walletCont">
      <div className="walletCont_header">
        <div className="balanceBox">
          <div>
            <p className="font-semibold text-sm mb-1">
              Անձնական հաշվի մնացորդը
            </p>
            <span className="text-xs">Հաշվին առկա գումարը՝</span>
          </div>
          <div className="balance">
            <p className="textPurple text-[40px] font-semibold mb-1">
              {balance} դր
            </p>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={fillBalanceImg} className="w-8 h-8" alt="" />
              <span className="text-sm">Համալրել</span>
            </div>
          </div>
        </div>
        <div className="tariffPlanBox">
          <div className="flex items-center gap-4">
            <p className="font-semibold text-sm mb-1">
              Անձնական հաշվի մնացորդը
            </p>
            <img src={editPenImg} alt="" className="cursor-pointer" />
          </div>
          {tarifPlanName ? (
            <span className="text-xl font-semibold">{tarifPlanName}</span>
          ) : (
            <span className="text-xs">
              Դուք դեռ չունեք ընտրած սակագնային պլան
            </span>
          )}
        </div>
      </div>
      <div className="attachedCards_cont">
        <p className="text-sm font-semibold">Կցված քարտեր</p>
        <div className="attachedCards">
          <div className="addCardBox">
            <div className="cursor-pointer flex flex-col items-center gap-3 w-fit p-2">
              <img src={fillBalanceImg} alt="" className="w-8 h-8" />
              <span className="text-xs">Կցել քարտ</span>
            </div>
          </div>
          <AttachedCard
            name="Master Card"
            cardNumbers={"4578 XXXX XXXX XX03"}
            userName={"Name"}
            userSurName={"Surname"}
            cardDate={"12 / 24"}
          />
          <AttachedCard
            name="Visa"
            cardNumbers={"4578 XXXX XXXX XX03"}
            userName={"Name"}
            userSurName={"Surname"}
            cardDate={"12 / 24"}
          />
        </div>
      </div>
      <div className="transactionHistory">
        <div>
          <p className="font-semibold text-sm mb-1">Գործարքների պատմություն</p>
          {transactionHistory ? (
            <table className="w-full">
              <WalThead />
              <WalTbody />
            </table>
          ) : (
            <span className="text-xs">Դուք դեռ չունեք կատարած գործարք</span>
          )}
        </div>
      </div>
    </div>
  );
};
