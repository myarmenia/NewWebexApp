import React, { useState } from "react";
import { IPaginationItem } from "../../../../../models/interfaces";
import "./pagination.css";
import { PagItem } from "./PagItem";

interface PaginationProps {
  currentitems?: IPaginationItem[];
}

export const Pagination: React.FC<PaginationProps> = ({ currentitems }) => {
  const [items, setItems] = useState<IPaginationItem[]>(currentitems || []);
  const itemClickHandler = (id: number, completedCount: number) => {
    setItems(
      items.map((el, index) => {
        if (el.id === id) {
          return { ...el, isActive: true };
        } else if (completedCount > index) {
          return { ...el, isActive: false, isCompleted: true };
        }
        return { ...el, isActive: false, isCompleted: false };
      })
    );
  };
  return (
    <div className="pagination">
      {items.map((el, index) => {
        return (
          <PagItem
            key={el.id}
            item={index + 1}
            itemsLength={items.length}
            isFirst={index + 1 === 1 && true}
            {...{ itemClickHandler, el }}
          />
        );
      })}
    </div>
  );
};
