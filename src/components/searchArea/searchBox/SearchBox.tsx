import React from "react";
import "./searchBox.css";
import { SearchBoxProps } from "../../../models/interfaces";

export const SearchBox: React.FC<SearchBoxProps> = ({
  url,
  className,
  alt,
  title,
  animDelay,
}) => {
  const delay: number | undefined = animDelay && animDelay * 200;
  return (
    <a
      href="#"
      style={{ animationDelay: `${delay}ms` }}
      // style={{ animationDelay: `${Math.floor(Math.random() * 10)}ms` }}
      data-name={animDelay}
      className={`searchBox ${className}`}
    >
      <img src={url} alt={alt} title={title} />
    </a>
  );
};
