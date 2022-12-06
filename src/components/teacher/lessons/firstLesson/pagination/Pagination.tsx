import React, { useState } from "react";
import "./pagination.css";
import { IPaginationItem } from "../../../../../models/interfaces";
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
            isFirst={index === 0 && true}
            {...{ itemClickHandler, el }}
          />
        );
      })}
    </div>
  );
};
