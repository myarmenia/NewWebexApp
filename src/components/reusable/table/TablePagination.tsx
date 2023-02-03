import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { TableProps } from "./Table";
import { TablePagItem as Btn } from "./TablePagItem";

interface TablePaginationProps<T> extends Omit<TableProps<T>, "rows"> {
  setArr: Dispatch<SetStateAction<T[]>>;
}

interface IValue {
  number: number;
  isPrev?: boolean;
}

const changeFstAndLastElems = (arr: IValue[], max: number) =>
  arr.map((elem, i) => {
    if (i === max) {
      return { ...elem, isPrev: false };
    }
    if (i === 0) {
      return { ...elem, isPrev: true };
    }
    return elem;
  });

const toggleClass = (bool: boolean) =>
  bool ? "opacity-50 cursor-not-allowed" : "opacity-100";

export function TablePagination<T>({
  data,
  pagMaxLength = 5,
  pagItemsLength = 7,
  setArr,
}: TablePaginationProps<T>) {
  const paginationLength = useMemo(
    () => Math.ceil(data.length / pagMaxLength),
    [data, pagMaxLength]
  );
  const fakeData: IValue[] = Array.from({ length: paginationLength }).map(
    (_, i) => ({ number: i })
  );
  const [pagArr, setPagArr] = useState<IValue[]>( // array containing current data's positions
    fakeData.filter((_, i) => i < pagItemsLength)
  );
  const [limit, setLimit] = useState<number>(0); // variable for data
  const [pagLimit, setPagLimit] = useState<number>(0); // variable for this pagination length

  const next = () => {
    if (limit < paginationLength - 1) {
      setLimit((prev) => prev + 1);
      if (pagLimit < pagItemsLength - 1) {
        setPagLimit((prev) => prev + 1);
      }
    }
  };
  const prev = () => {
    if (limit > 0) {
      setLimit((prev) => prev - 1);
      if (pagLimit > 0) {
        setPagLimit((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    setArr(
      data.filter(
        (_, i) =>
          i >= limit * pagMaxLength &&
          i <= (limit + 1) * (pagMaxLength - 1) + limit
      )
    );

    if (
      pagArr[pagLimit] &&
      pagArr[pagLimit].isPrev !== undefined &&
      limit > 0 &&
      limit < data.length
    ) {
      setPagArr((prev) =>
        changeFstAndLastElems(
          fakeData.filter((_, i) => {
            if (i < paginationLength) {
              if (
                !prev[pagLimit].isPrev &&
                i >= limit - (pagItemsLength - 2) &&
                i <= limit + 1
              ) {
                return true;
              } else if (
                !prev[pagLimit].isPrev &&
                limit === paginationLength - 1 &&
                i >= limit - (pagItemsLength - 1)
              ) {
                return true;
              }
              if (
                prev[pagLimit].isPrev &&
                i >= limit - 1 &&
                i <= limit + (pagItemsLength - 2)
              ) {
                return true;
              }
            }
            return false;
          }),
          pagItemsLength - 1
        )
      );
    } else {
      setPagArr((prev) => changeFstAndLastElems(prev, pagItemsLength - 1));
    }
  }, [limit, pagLimit]);

  if (data.length <= pagMaxLength) {
    return null;
  }
  return (
    <div className="mt-4 flex items-center gap-3 justify-end med-360:gap-2">
      <Btn onClick={prev} className={toggleClass(limit === 0)} isSymbol>
        &#8249;
      </Btn>
      <div className="flex items-center gap-1 med-360:gap-[2px]">
        {pagArr.map(({ number }, i) => (
          <Btn
            onClick={() => {
              setLimit(number);
              setPagLimit(i);
            }}
            className={number === limit ? "opacity-100" : "opacity-50"}
            key={i}
          >
            {number + 1}
          </Btn>
        ))}
      </div>
      <Btn
        onClick={next}
        className={toggleClass(limit === paginationLength - 1)}
        isSymbol
      >
        &#8250;
      </Btn>
    </div>
  );
}
