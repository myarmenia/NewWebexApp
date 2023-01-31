import React, { FC } from "react";
import styles from "./attachedCard.module.css";

interface AttachedCardProps {
  name: string;
  cardNumbers: string | number;
  userName: string;
  userSurName: string;
  cardDate: number | string;
}

export const AttachedCard: FC<AttachedCardProps> = ({
  name,
  cardNumbers,
  userName,
  userSurName,
  cardDate,
}) => {
  return (
    <div className={styles.attachedCard}>
      <span
      // className="attachedCard_name"
      >
        {name}
      </span>
      <div className={styles.attachedCard_numbers}>{cardNumbers}</div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[8px]">name</span>
          <span className="text-xs">
            {userName} {userSurName}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[8px]">Exp. date</span>
          <span className="text-xs">{cardDate}</span>
        </div>
      </div>
    </div>
  );
};
