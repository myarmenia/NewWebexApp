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

const changeFstAndLastElems = (arr: IValue[]) =>
  arr.map((elem, i) => {
    if (i === arr.length - 1) {
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
  maxTrs = 5,
  pagItemsLength = 7,
  setArr,
}: TablePaginationProps<T>) {
  // ---------- variables ----------
  const paginationLength = useMemo(
    () => Math.ceil(data.length / maxTrs),
    [data, maxTrs]
  );
  const dataIndexes: IValue[] = Array.from({ length: paginationLength }).map(
    (_, i) => ({ number: i })
  );
  const [pagArr, setPagArr] = useState<IValue[]>( // array containing data's current positions
    dataIndexes.filter((_, i) => i < pagItemsLength)
  );
  const [limit, setLimit] = useState<number>(0); // variable for data length (index)
  const [pagLimit, setPagLimit] = useState<number>(0); // variable for pagination length (index)

  // ---------- funcions ----------
  const filterArr = () => {
    setArr(
      data.filter(
        (_, i) => i >= limit * maxTrs && i <= (limit + 1) * (maxTrs - 1) + limit
      )
    );
  };
  const next = () => {
    if (limit < paginationLength - 1) setLimit((prev) => prev + 1);
    if (pagLimit < pagItemsLength - 1) setPagLimit((prev) => prev + 1);
  };
  const prev = () => {
    if (limit > 0) setLimit((prev) => prev - 1);
    if (pagLimit > 0) setPagLimit((prev) => prev - 1);
  };

  // ---------- useEffects ----------
  useEffect(() => {
    if (data.length > maxTrs) {
      filterArr();

      if (
        pagArr[pagLimit] &&
        pagArr[pagLimit].isPrev !== undefined &&
        limit > 0 &&
        limit < data.length
      ) {
        setPagArr((prev) =>
          changeFstAndLastElems(
            dataIndexes.filter((_, i) => {
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
            })
          )
        );
      } else {
        setPagArr((prev) => changeFstAndLastElems(prev));
      }
    }
  }, [limit, pagLimit]);

  useEffect(() => {
    setArr(data);
    if (data.length > maxTrs) {
      filterArr();
    }
    setPagArr(prev => prev.filter((_, i) => i < pagItemsLength))
  }, [data]);

  if (data.length <= maxTrs) {
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
