import { FC } from "react";
import {
  CustomCheckbox,
  CustomNmbInp,
} from "../../../../../../components/forms";
import styles from "./ageDiv.module.css";

export const AgeDiv: FC = () => {
  return (
    <div className={styles.mycontainer}>
      <div className={styles.noAgeLimit}>
        <span className="text-gray text-xs">Տարիքային սահմանափակում</span>
        <CustomCheckbox regName="isAgeLimit" label="Չկա" />
      </div>
      <div className={styles.ageLimits}>
        <CustomNmbInp defaultValue={16} regName="minAgeLimit" />
        <hr className="w-[10px] bg-[#CCCCCC] h-[1.5px] rounded border-none" />
        <CustomNmbInp defaultValue={99} regName="maxAgeLimit" />
      </div>
    </div>
  );
};
