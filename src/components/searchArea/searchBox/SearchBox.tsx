import React from "react";
import './searchBox.css'

interface SearchBoxProps {
  url: string;
  className: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ url, className }) => {
  return (
    <a href="#" className={`searchBox ${className}`}>
      <img src={url} alt="" />
    </a>
  );
};
