import React from "react";
import "./pagination.css";
import { IPaginationItem } from "../../../../../models/interfaces";

interface PagItemProps {
  el: IPaginationItem;
  item: number;
  isFirst?: boolean;
  itemClickHandler: (id: number, completedCount: number) => void;
}

export const PagItem: React.FC<PagItemProps> = ({
  el,
  item,
  isFirst,
  itemClickHandler,
}) => {
  return (
    <div className={`pagItem w-[${isFirst ? "13px" : "100%"}]`}>
      {!isFirst && (
        <div
          className={`pagLine ${
            el.isActive || el.isCompleted ? "pagLineActive" : ""
          }`}
        />
      )}
      <div
        className={`pagNumber ${
          el.isActive ? "pagActive" : el.isCompleted ? "pagCompleted" : ""
        } ${isFirst ? "firstItem" : ""}`}
        onClick={() => itemClickHandler(el.id, item)}
      >
        <span>{item}</span>
      </div>
    </div>
  );
};
