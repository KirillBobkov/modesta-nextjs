import React, { useState } from "react";
import styles from "./BooksBlock.module.css";
import { GridBlock } from "../GridBlock/GridBlock";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { booksContent } from "../../content/books";

const BookContent = ({ item }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);

  const handlers = isMobile
    ? {
        onClick: (e) => {
          e?.preventDefault();
          setTooltipVisible(!tooltipVisible);
        },
      }
    : {
        onMouseEnter: () => {
          setTooltipVisible(true);
        },
        onMouseLeave: () => {
          setTooltipVisible(false);
        },
      };

  return (
    <a
      onClick={() => {
        ym(96028442,'reachGoal','book-download')
      }}
      target="_blank"
      className={styles["books__item-wrapper"]}
      href={item.link}
    >
      <div itemScope itemType="http://schema.org/CreativeWork" className={styles["books__item-info"]}>
        <meta itemProp="learningResourceType" content="AcademicThesis" />
        <p className={styles["books__item-name"]} itemProp="name">
          {item.name}
        </p>
        {item.author && (
          <p className={styles["books__item-author"]} itemProp="author">
            {item.author}
          </p>
        )}
        <p
          itemProp="description"
          className={`${styles["books__item-description"]} ${tooltipVisible ? styles["books__item-description--visible"] : ""}`}
        >
          {item.description}
        </p>
      </div>
      <div className={styles.books__img} {...handlers}>
        {!tooltipVisible ? (
          <svg className={styles.books__svg} viewBox="0 0 128 128" enableBackground="new 0 0 128 128" xmlSpace="preserve">
            <g>
              <g>
                <path
                  d="M64,0C28.656,0,0,28.656,0,64s28.656,64,64,64s64-28.656,64-64S99.344,0,64,0z M64,120C33.125,120,8,94.875,8,64
			S33.125,8,64,8s56,25.125,56,56S94.875,120,64,120z M64,48c-4.414,0-8,3.586-8,8v40c0,4.414,3.586,8,8,8s8-3.586,8-8V56
			C72,51.586,68.414,48,64,48z M64,24c-4.414,0-8,3.586-8,8s3.586,8,8,8s8-3.586,8-8S68.414,24,64,24z"
                />
              </g>
            </g>
          </svg>
        ) : (
          <svg className={styles.books__svg} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="m12 22c5.5228475 0 10-4.4771525 10-10s-4.4771525-10-10-10-10 4.4771525-10 10 4.4771525 10 10 10zm0 2c-6.627417 0-12-5.372583-12-12s5.372583-12 12-12 12 5.372583 12 12-5.372583 12-12 12z" />
              <path d="m9.20710678 16.2071068c-.39052429.3905243-1.02368927.3905243-1.41421356 0s-.39052429-1.0236893 0-1.4142136l6.99999998-6.99999998c.3905243-.39052429 1.0236893-.39052429 1.4142136 0s.3905243 1.02368927 0 1.41421356z" />
              <path d="m7.79289322 9.20710678c-.39052429-.39052429-.39052429-1.02368927 0-1.41421356s1.02368927-.39052429 1.41421356 0l7.00000002 6.99999998c.3905243.3905243.3905243 1.0236893 0 1.4142136s-1.0236893.3905243-1.4142136 0z" />
            </g>
          </svg>
        )}
      </div>
    </a>
  );
};

export const BooksBlock = () => {
  return (
    <GridBlock
      title={booksContent.title}
      id="books"
      clickable
      hideButton
      columns={3}
      description={booksContent.description}
      content={booksContent.blocks}
      renderItem={(item) => <BookContent item={item} />}
    />
  );
};
