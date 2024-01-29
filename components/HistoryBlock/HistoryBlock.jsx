import React from "react";

import styles from "./HistoryBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";


export function HistoryBlock({ title, descriptions }) {
  return (
    <section className={`${containerStyles.container}`}  id="history">
      <VisibilityManager
        as="div"
        side="topmax"
        classes={`${styles.history__content}`}
      >
        {title ? <h2 className={styles.history__title}>{title}</h2> : null}
        {descriptions
          ? descriptions.map((text) => {
              return <VisibilityManager as="p" side="right" classes={styles["history__description"]}>{text}</VisibilityManager>;
            })
          : null}
      </VisibilityManager>
    </section>
  );
}
