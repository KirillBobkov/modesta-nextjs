import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";
import styles from "./GridBlock.module.css";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";

export const GridBlock = React.memo(
  ({ content, renderItem, title, id, clickable = false }) => {
    return (
      <section className={containerStyles.container}>
        {title && (
          <VisibilityManager
            as="h2"
            classes={`${containerStyles.container__title}`}
            id={id}
          >
            {title}
          </VisibilityManager>
        )}
        <ul className={styles.grid}>
          {content.map((item, i) => {
            return (
              <VisibilityManager
                key={i}
                as="li"
                classes={`${styles.grid__item} ${shadowStyles.shadow} ${
                  clickable ? styles["grid__item--clickable"] : ""
                }`}
              >
                {renderItem(item)}
              </VisibilityManager>
            );
          })}
        </ul>
      </section>
    );
  }
);
