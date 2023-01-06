import { FC } from "react";
import { useNavigate } from "react-router";
import { IHeaderDropDownOption } from "../../../models/interfaces";

interface ItemProps {
  option: IHeaderDropDownOption;
  setState: (state: boolean) => void;
}
export const Item: FC<ItemProps> = ({
  option: { title, onClick, path },
  setState,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="dropItem"
      onClick={() => {
        onClick?.();
        path && navigate(path);
        setState(false);
      }}
    >
      {title}
    </div>
  );
};
