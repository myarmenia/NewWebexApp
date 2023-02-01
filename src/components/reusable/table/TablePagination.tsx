import {
  ButtonHTMLAttributes,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { generateArray } from "../../../helper";
import { TableProps } from "./Table";

interface ILength {
  start: number;
  end: number;
  on: number;
}

interface TablePagination<T> extends Omit<TableProps<T>, "rows"> {
  setArr: Dispatch<SetStateAction<T[]>>;
}

export function TablePagination<T>({
  data,
  paginationLength = 4,
  setArr,
}: TablePagination<T>) {
  const [limit, setLimit] = useState<ILength>({
    start: 0,
    end: paginationLength,
    on: 0,
  });
  const next = () => {
    if (limit.end + paginationLength + 1 < data.length + paginationLength) {
      setLimit((prev) => ({
        start: prev.start + paginationLength + 1,
        end: prev.end + paginationLength + 1,
        on: prev.on + 1,
      }));
    }
  };
  const prev = () => {
    if (limit.start === paginationLength) {
      setLimit((prev) => ({
        start: prev.start - paginationLength,
        end: prev.end - paginationLength,
        on: prev.on - 1,
      }));
    } else if (limit.start > paginationLength) {
      setLimit((prev) => ({
        start: prev.start - paginationLength - 1,
        end: prev.end - paginationLength - 1,
        on: prev.on - 1,
      }));
    }
  };

  useEffect(() => {
    setArr(data.filter((_, i) => i <= limit.end && i >= limit.start));
  }, [limit]);

  if (data.length <= paginationLength + 1) {
    return null;
  }
  return (
    <div className="mt-4 flex items-center gap-3 justify-end">
      <Btn onClick={prev} className="!opacity-100" isSymbol>
        &#8249;
      </Btn>
      <div className="flex items-center gap-1">
        {generateArray(Math.ceil(data.length / (paginationLength + 1)), {}).map(
          (_, i) => {
            return (
              <Btn
                onClick={() => {
                  setLimit({
                    start: i * (paginationLength + 1),
                    end: i * paginationLength + paginationLength + i,
                    on: i,
                  });
                }}
                className={i === limit.on ? "!opacity-100" : ""}
                key={i}
              >
                {i + 1}
              </Btn>
            );
          }
        )}
      </div>
      <Btn onClick={next} className="!opacity-100" isSymbol>
        &#8250;
      </Btn>
    </div>
  );
}

const Btn: FC<
  PropsWithChildren &
    ButtonHTMLAttributes<HTMLButtonElement> & { isSymbol?: boolean }
> = ({ children, isSymbol = false, className = "", ...props }) => (
  <button
    {...props}
    type="button"
    className={
      className +
      " w-[30px] relative h-[30px] rounded-[7px] bg-[#898bce] opacity-50 text-white"
    }
  >
    <span
      className={`absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
        isSymbol
          ? "text-[40px] font-mono h-[19px] leading-4"
          : "text-[23px] font-medium h-[21px] leading-[20px]"
      }`}
    >
      {children}
    </span>
  </button>
);
