import { FC, SetStateAction } from "react";
import { CustomBtn, CustomSelect } from "../../../../../components/forms";
import { ModalContainer } from "../../../../../components/modalContainer/ModalContainer";
import styles from "../wallet.module.css";

interface WalletModalProps {
  setIsModalOpen: (value: SetStateAction<boolean>) => void;
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
  selectHandler: () => void;
  selectError: string;
}

const WalletModalComp: FC<WalletModalProps> = ({
  setIsModalOpen,
  selectValue,
  setSelectValue,
  selectHandler,
  selectError,
}) => {
  return (
    <ModalContainer
      onClick={() => setIsModalOpen(false)}
      className={{ modal: "!pt-[14px] !h-[390px] !w-[600px] !px-5" }}
    >
      <div className="h-full flex items-center justify-center relative box-border">
        <div className="absolute top-0 left-0 w-full pb-4  border-b border-[#BEBFE4] text-[#7A64FA]">
          Սակագնային պլան
        </div>

        <div className="w-[75%] flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-gray text-sm font-semibold">
              Ընտրել սակագնային պլանը
            </span>
            <CustomSelect
              options={["Սակագնային պլանի անվանումը", "asdfghjkl"]}
              placeholder="Սակագնային պլանի անվանումը"
              value={selectValue}
              setValue={setSelectValue}
              error={selectError}
            />
          </div>
          <div className="flex items-center justify-between">
            <CustomBtn
              type="submit"
              title="Չեղարկել"
              className={styles.payBtn}
            />
            <CustomBtn onClick={selectHandler} title="Հաստատել" />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export const WalletModal = WalletModalComp;
