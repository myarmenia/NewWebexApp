import { FC, useState } from "react";
import { StarItem } from "./starItem/StarItem";

interface IStarItem {
  isCompleted: boolean;
}

const starsArr: IStarItem[] = [
  { isCompleted: false },
  { isCompleted: false },
  { isCompleted: false },
  { isCompleted: false },
  { isCompleted: false },
];

export const OpinionStars: FC = () => {
  const [items, setItems] = useState<IStarItem[]>(starsArr || []);
  const itemClickHandler = (completedCount: number) => {
    setItems(
      items.map((el, index) =>
        completedCount >= index
          ? { ...el, isCompleted: true }
          : { ...el, isCompleted: false }
      )
    );
  };
  return (
    <div className="flex items-center gap-[6px]">
      {items.map(({ isCompleted }, index) => (
        <StarItem
          onClick={() => itemClickHandler(index)}
          {...{ isCompleted }}
          key={Math.random()}
        />
      ))}
    </div>
  );
};
