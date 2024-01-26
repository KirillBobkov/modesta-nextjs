import React from "react";

import styles from "./HistoryBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";

export function HistoryBlock({ title, descriptions }) {
  return (
    <section className={styles.history} id="history">
      <VisibilityManager
        as="div"
        side="topmax"
        classes={styles.history__content}
      >
        {title ? <h2 className={styles["history__title"]}>{title}</h2> : null}
        {descriptions
          ? descriptions.map((text) => {
              return <p className={styles["history__description"]}>{text}</p>;
            })
          : null}
      </VisibilityManager>
    </section>
  );
}
