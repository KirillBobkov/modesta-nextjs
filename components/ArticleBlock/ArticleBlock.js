import React from "react";
import styles from "./ArticleBlock.module.css";
import Image from "next/image.js";
import shadowStyles from "../../styles/shadow.module.css";
import containerStyles from "../../styles/container.module.css";

export const ArticleBlock = ({ articleContent }) => {
  return (
    <div className={`${styles['article-container']} ${containerStyles.container}`}>
      <article className={`${styles.article}`}>
        {articleContent?.title && <h2 className={`${styles["article__head-title"]}`}>{articleContent.title}</h2>}
        {articleContent?.content &&
          Object.entries(articleContent.content).map(([key, value], i) => {
            if (key.includes("title")) {
              return <h3 className={`${styles["article__content-container"]} ${styles.article__title}`}>{value}</h3>;
            }
            if (key.includes("subheading")) {
              return <p className={`${styles["article__content-container"]} ${styles.article__subheading}`}>{value}</p>;
            }
            if (key.includes("paragraph")) {
              return <p className={`${styles["article__content-container"]} ${styles.article__paragraph}`}>{value}</p>;
            }
            if (key.includes("image")) {
              return <Image className={`${styles.article__img} ${shadowStyles.shadow}`} priority alt={`Изображение статьи №${i}`} src={value} />;
            }
            return <></>;
          })}
      </article>
    </div>
  );
};
