import React from "react";

interface SearchBoxProps {
  url: string;
  className: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ url, className }) => {
  return (
    <a href="#" className={`absolute ${className}`}>
      <img src={url} alt="" />
    </a>
  );
};
