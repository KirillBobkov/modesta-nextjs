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
              {opened ? "Cвернуть" : "Посмотреть всё"}
            </div>
          )}
        </ul>
      </section>
    );
  }
);
