import React, { useRef, useState } from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";
import styles from "./GridBlock.module.css";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";

const widthMapper = {
  2: 'grid__item--2-columns',
  3: 'grid__item--3-columns',
  4: 'grid__item--4-columns',
  5: 'grid__item--5-columns',
}
export const GridBlock = React.memo(
  ({
    content,
    renderItem,
    title,
    description,
    hideButton,
    columns = 3,
    id,
    clickable = false,
  }) => {
    const ref = useRef(null);
    const [opened, setOpened] = useState(false);

    return (
      <section   itemScope itemType="https://schema.org/ItemList" ref={ref} className={`${containerStyles.container}`}>
        {title && (
          <VisibilityManager itemProp="name" as="h2" className={`${styles.grid__title} ${containerStyles.container__title}`} id={id}>
            {title}
          </VisibilityManager>
        )}
        {description && (
          <VisibilityManager
            as="p"
            className={`${styles.grid__description}`}
            id={id}
          >
            {description}
          </VisibilityManager>
        )}
        <ul
          className={`${styles.grid__list} ${
            hideButton ? styles.grid__container : ""
          } ${opened ? styles["grid__container--visible"] : ""}`}
        >
          {content.map((item, i) => {
            const columnsClass = widthMapper[columns];
            return (
              <VisibilityManager
                key={i}
                as="li"
                itemProp="itemListElement" itemType="https://schema.org/ListItem"
                className={`${styles.grid__item} ${styles[`${columnsClass}`]} ${shadowStyles.shadow} ${
                  clickable ? styles["grid__item--clickable"] : ""
                }`}
              >
                {renderItem(item)}
              </VisibilityManager>
            );
          })}
          {hideButton && (
            <div
              className={`${styles.grid__button} ${opened ? styles['grid__button--opened'] : ''}`}
              onClick={() => {
                if (opened) {
                  ref?.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }
                setOpened(!opened);
              }}
            >
              <span className={`${styles['grid__button-content']}`}>{opened ? "Cвернуть" : "Посмотреть всё"}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" version="1.1"><path d="" stroke="none" fillRule="evenodd"/><path d="M 250.551 107.462 C 247.432 108.599, 220.984 134.498, 124.702 230.701 C 53.251 302.093, 2.223 353.832, 1.401 355.718 C -0.400 359.855, -0.392 366.355, 1.421 369.800 C 2.202 371.285, 9.964 379.546, 18.671 388.157 C 31.599 400.944, 35.259 404.016, 38.643 404.916 C 40.922 405.523, 43.397 405.828, 44.143 405.593 C 44.889 405.359, 46.850 404.876, 48.500 404.519 C 50.768 404.030, 76.440 378.951, 153.750 301.702 L 256 199.532 358.250 301.702 C 435.560 378.951, 461.232 404.030, 463.500 404.519 C 465.150 404.876, 467.111 405.359, 467.857 405.593 C 468.603 405.828, 471.078 405.523, 473.357 404.916 C 476.727 404.018, 480.365 400.983, 492.853 388.656 C 510.652 371.085, 513 367.916, 513 361.461 C 513 358.663, 512.611 357.122, 512 357.500 C 511.450 357.840, 511 357.308, 511 356.319 C 511 354.339, 268.170 110.757, 263.965 108.520 C 259.813 106.311, 254.796 105.915, 250.551 107.462 M 0.300 363 C 0.300 366.025, 0.487 367.262, 0.716 365.750 C 0.945 364.238, 0.945 361.762, 0.716 360.250 C 0.487 358.738, 0.300 359.975, 0.300 363" stroke="none" fill="#040404" fillRule="evenodd"/></svg>
            </div>
          )}
        </ul>
      </section>
    );
  }
);
