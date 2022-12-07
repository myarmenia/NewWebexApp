import React from "react";

interface BoxTitleProps {
  title: string;
}

export const BoxTitle: React.FC<BoxTitleProps> = ({ title }) => {
  return <div className="text-[#6B6B6B] text-base mb-3">{title}</div>;
};
