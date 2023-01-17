import { FC } from "react";
import { useSelectContext } from "./CustomSelect";
import { Option } from "./Option";
import { OptionInput } from "./OptionInput";

export const Options: FC = () => {
  const { options, isMutable } = useSelectContext();
  return (
    <div className="options">
      <div className="optionsContainer">
        {options.map((option, optionId) => (
          <Option key={optionId} {...{ option, optionId }} />
        ))}
      </div>
      {isMutable?.isInput && <OptionInput />}
    </div>
  );
};
