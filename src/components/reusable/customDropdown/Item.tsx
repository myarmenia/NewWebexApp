import { FC } from "react";
import { useNavigate } from "react-router";
import { IHeaderDropDownOption } from "../../../models/interfaces";

interface ItemProps {
  option: IHeaderDropDownOption;
}
export const Item: FC<ItemProps> = ({ option: { title, onClick, path } }) => {
  const navigate = useNavigate();
  return (
    <div
      className="dropItem bg_hover"
      onClick={() => {
        onClick?.();
        path && navigate(path);
      }}
    >
      {title}
    </div>
  );
};
