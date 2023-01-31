import React from "react";
import styles from "./pagination.module.css";
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
    line: el.isActive || el.isCompleted ? styles.lineActive : "",
    lesson: el.isActive
      ? styles.active
      : el.isCompleted
      ? styles.completed
      : "",
    first: isFirst ? styles.firstItem : "",
  };

  return (
    <div className={`${styles.item} ${mainDiv}`}>
      {!isFirst && <div className={`${styles.line} ${line}`} />}
      <div
        className={[styles.number, lesson, first].join(" ")}
        onClick={() => itemClickHandler(el.id, item)}
      >
        <span>{item}</span>
      </div>
    </div>
  );
};
