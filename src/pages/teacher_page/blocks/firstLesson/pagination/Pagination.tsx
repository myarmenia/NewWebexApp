import React, { useState } from "react";
import styles from  "./pagination.module.css";
import { IPaginationItem } from "../../../../../models/interfaces";
import { PagItem } from "./PagItem";
import { useNavigate } from "react-router";

interface PaginationProps {
  currentitems?: IPaginationItem[];
}

export const Pagination: React.FC<PaginationProps> = ({ currentitems }) => {
  const navigate = useNavigate();
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
    if (completedCount === currentitems?.length) {
      navigate("/teacher/exam");
    }
  };

  return (
    <>
      <div className={styles.mycontainer}>
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
    </>
  );
};

// passing to next or previous lesson by pagination
// const [count, setCount] = useState<number>(1);
// const goNext = (id: number) => {
//   setItems(
//     items.map((el, ind) => {
//       if (id === ind + 1) {
//         return { ...el, isActive: true };
//       } else if (id > ind) {
//         return { ...el, isActive: false, isCompleted: true };
//       }
//       return { ...el, isActive: false, isCompleted: false };
//     })
//   );
// };
// useEffect(() => {
//   goNext(count);
// }, [count]);

// JSX

  /* <button
className="addLessonBtn"
onClick={() => {
  setCount((prev) =>
    prev > 0 && prev < currentitems?.length! ? prev + 1 : prev
  );
}}
>
go to next
</button>
<button
className="addLessonBtn"
onClick={() => {
  setCount((prev) => (prev > 1 ? prev - 1 : prev));
}}
>
go to previous
</button> */

// =======================
