import React from "react";

interface BoxTitleProps {
  title: string;
}

export const BoxTitle: React.FC<BoxTitleProps> = ({ title }) => {
  return <div className="text-gray text-base mb-3">{title}</div>;
};
