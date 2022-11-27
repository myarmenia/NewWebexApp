import React from "react";
import "./searchBox.css";
import { SearchBoxProps } from "../../../models/interfaces";

export const SearchBox: React.FC<SearchBoxProps> = ({
  url,
  className,
  alt,
  title,
}) => {
  return (
    <a href="#" className={`searchBox ${className}`}>
      <img src={url} alt={alt} title={title} />
    </a>
  );
};
