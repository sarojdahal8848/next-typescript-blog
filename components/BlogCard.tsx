import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IArticle } from "../types";
import { dateFormat } from "../utils";

interface IPropType {
  article: IArticle;
}
const BlogCard = ({ article }: IPropType) => {
  return (
    <div>
      <Link href={`/article/${article.attributes.Slug}`}>
        <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.Title}
        </h1>
      </Link>
      <div className="flex items-center my-4">
        <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
          <Image
            src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
            height={40}
            width={40}
            alt="article-image"
          />
        </div>
        <span className="text-sm font-bold text-gray-600">
          {article.attributes.author.data.attributes.firstname}{" "}
          {article.attributes.author.data.attributes.lastname} on
          <span className="text-gray-400 ml-2">
            {dateFormat(article.attributes.createdAt)}
          </span>
        </span>
      </div>
      <div className="text-gray-500">
        {article.attributes.shortDescription.slice(0, 250)}
        {article.attributes.shortDescription.length > 250 ? "..." : ""}
      </div>
    </div>
  );
};

export default BlogCard;
