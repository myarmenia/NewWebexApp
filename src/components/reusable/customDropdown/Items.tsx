import { FC } from "react";
import { IHeaderDropDownOption } from "../../../models/interfaces";
import styles from "./customDropdown.module.css";
import { Item } from "./Item";

interface ItemsProps {
  options: IHeaderDropDownOption[];
}

export const Items: FC<ItemsProps> = ({ options }) => {
  return (
    <div className={styles.dropItems}>
      <div className="overflow-hidden rounded-2xl">
        <div className={styles.dropItemsCont}>
          {options.map((option, id) => (
            <Item {...{ option }} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};
