import { FC, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import {
  CustomCheckbox,
  CustomNmbInp,
} from "../../../../../../components/forms";
import { TeacherSubmitForm } from "../../../../../../validations/newLesson_schema";
import styles from "./ageDiv.module.css";

export const AgeDiv: FC = () => {
  const { clearErrors, watch } = useFormContext<TeacherSubmitForm>();
  const isAgeLimit = watch("isAgeLimit");
  useEffect(() => {
    if (isAgeLimit) {
      clearErrors("minAgeLimit");
    }
  }, [isAgeLimit]);
  return (
    <div className={styles.mycontainer}>
      <div className={styles.noAgeLimit}>
        <span className="text-gray text-xs">Տարիքային սահմանափակում</span>
        <CustomCheckbox regName="isAgeLimit" label="Չկա" />
      </div>
      <div className={styles.ageLimits}>
        <CustomNmbInp
          value={3}
          minValue={1}
          maxValue={99}
          regName="minAgeLimit"
        />
        {/* <hr className="w-[10px] bg-[#CCCCCC] h-[1.5px] rounded border-none" /> */}
        {/* <CustomNmbInp regName="maxAgeLimit" /> */}
      </div>
    </div>
  );
};
