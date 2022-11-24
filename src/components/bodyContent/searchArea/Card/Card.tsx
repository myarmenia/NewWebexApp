import React from "react";
import './Card.css'

interface CardProps {
  url: string;
  className: string;
}

export const Card: React.FC<CardProps> = ({ url, className }: CardProps) => {
  return (
    <a href="#" className={`card ${className}`}>
      <img src={url} />
    </a>
  );
};
