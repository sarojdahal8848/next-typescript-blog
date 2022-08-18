import React from "react";
import { IArticle } from "../types";
import BlogCard from "./BlogCard";
import BlogCardWithImage from "./BlogCardWithImage";

interface IPropType {
  articles: IArticle[];
}

const ArticleList = ({ articles }: IPropType) => {
  return (
    <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
      {articles.map((article, index) => {
        if (index === 1) {
          return <BlogCardWithImage key={article.id} article={article} />;
        }
        return <BlogCard key={article.id} article={article} />;
      })}
    </div>
  );
};

export default ArticleList;
