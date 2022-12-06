import React from "react";
import { IPaginationItem } from "../../../../../models/interfaces";
import "./pagination.css";

interface PagItemProps {
  el: IPaginationItem;
  item: number;
  itemsLength: number;
  isActive?: boolean;
  isFirst?: boolean;
  itemClickHandler: (id: number, completedCount: number) => void;
}

export const PagItem: React.FC<PagItemProps> = ({
  el,
  item,
  itemsLength,
  isFirst,
  itemClickHandler,
}) => {
  const itemWidth: string = isFirst ? 13 + "px" : 100 + "%";

  return (
    <div className="pagItem" style={{ width: `${itemWidth}` }}>
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
