import React from "react";
import Image from "next/image.js";

export const ArticleBlock = ({ articleContent }) => {
  return (
    <div className="max-w-screen-xl w-full mx-auto px-0 mb-15 md:px-10 md:mb-30">
      <article
        itemScope
        itemType="http://schema.org/Article"
        className="overflow-hidden max-w-full md:max-w-[700px] mx-auto"
      >
        {articleContent?.title && (
          <h2
            itemProp="headline"
            className="text-left font-bold whitespace-pre-line px-[15px] text-[25px] leading-[32px] md:px-0 md:text-[36px] md:leading-[42px]"
          >
            {articleContent.title}
          </h2>
        )}
        <meta itemProp="author" content="Модеста" />
        <meta itemProp="description" content={articleContent.title} />
        <div itemProp="articleBody">
          {articleContent?.content &&
            Object.entries(articleContent.content).map(([key, value], i) => {
              if (key.includes("title")) {
                return (
                  <h3
                    key={i}
                    className="text-left font-bold whitespace-pre-line px-[15px] text-[20px] leading-[24px] my-5 md:px-0 md:text-[24px] md:leading-[30px]"
                  >
                    {value}
                  </h3>
                );
              }
              if (key.includes("subheading")) {
                return (
                  <p
                    key={i}
                    className="font-bold whitespace-pre-line px-[15px] my-5 md:px-0"
                  >
                    {value}
                  </p>
                );
              }
              if (key.includes("paragraph")) {
                return (
                  <p
                    key={i}
                    className="text-[var(--secondary-font-color)] whitespace-pre-line px-[15px] mb-5 md:px-0"
                  >
                    {value}
                  </p>
                );
              }
              if (key.includes("image")) {
                return (
                  <Image
                    key={i}
                    className="w-full h-auto object-contain block mt-[30px] mb-[20px] rounded-none md:mb-[30px] md:rounded-[30px] shadow-lg"
                    priority
                    alt={`Изображение статьи №${i}`}
                    src={value}
                  />
                );
              }
              return <></>;
            })}
        </div>
      </article>
    </div>
  );
};
