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
  const { mainDiv, line, lesson, first } = {
    mainDiv: isFirst ? "w-[13px]" : "w-[100%]",
    line: el.isActive || el.isCompleted ? "pagLineActive" : "",
    lesson: el.isActive ? "pagActive" : el.isCompleted ? "pagCompleted" : "",
    first: isFirst ? "firstItem" : "",
  };

  return (
    <div className={`pagItem ${mainDiv}`}>
      {!isFirst && <div className={`pagLine ${line}`} />}
      <div
        className={`pagNumber ${lesson} ${first}`}
        onClick={() => itemClickHandler(el.id, item)}
      >
        <span>{item}</span>
      </div>
    </div>
  );
};
