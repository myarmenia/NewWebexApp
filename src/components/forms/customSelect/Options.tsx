import { FC } from "react";
import styles from "./customSelect.module.css";
import { useSelectContext } from "./CustomSelect";
import { Option } from "./Option";
import { OptionInput } from "./OptionInput";

export const Options: FC = () => {
  const { options, isMutable, toggleOptions } = useSelectContext();
  return (
    <>
      <div className={styles.options}>
        <div className={styles.optionsContainer}>
          {options.map((option, optionId) => (
            <Option key={optionId} {...{ option, optionId }} />
          ))}
        </div>
        {isMutable?.isInput && <OptionInput />}
      </div>
      <div className={styles.backDiv} onClick={toggleOptions} />
    </>
  );
};
