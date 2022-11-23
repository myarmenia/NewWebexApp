import React from "react";
import { NewsCard } from "./NewsCard";
import "./News.css";
export const News = () => {
  return (
    <div className="newsContainer">
      <div className="newsTitle">Նորություններ</div>
      <div className="newsContainerChild">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};
