import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { CustomNmbInp } from "../../../../../../components/forms";
import styles from "./ageDiv.module.css";

export const AgeDiv: FC = () => {
  const { register } = useFormContext();
  return (
    <div className={styles.mycontainer}>
      <div className={styles.noAgeLimit}>
        <span className="text-gray text-xs">Տարիքային սահմանափակում</span>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className={styles.checkbox}
            {...register("isAgeLimit")}
          />
          <span>Չկա</span>
        </div>
      </div>
      <div className={styles.ageLimits}>
        <CustomNmbInp defaultValue={16} regName="minAgeLimit" />
        <hr className="w-[10px] bg-[#CCCCCC] h-[1.5px] rounded border-none" />
        <CustomNmbInp defaultValue={99} regName="maxAgeLimit" />
      </div>
    </div>
  );
};
