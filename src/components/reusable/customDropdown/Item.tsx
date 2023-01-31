import { FC } from "react";
import { useNavigate } from "react-router";
import { IHeaderDropDownOption } from "../../../models/interfaces";
import styles from "./customDropdown.module.css";

interface ItemProps {
  option: IHeaderDropDownOption;
}
export const Item: FC<ItemProps> = ({ option: { title, onClick, path } }) => {
  const navigate = useNavigate();
  return (
    <div
      className={[styles.dropItem, "bg_hover"].join(" ")}
      onClick={() => {
        onClick?.();
        path && navigate(path);
      }}
    >
      {title}
    </div>
  );
};
