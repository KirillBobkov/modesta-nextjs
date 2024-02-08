import React from "react";
import styles from "./HistoryBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import containerStyles from "../../styles/container.module.css";

export function HistoryBlock({ title, description }) {
  return (
    <section className={`${containerStyles.container}`} id="history">
      <VisibilityManager as="div" className={`${styles.history__content}`}>
        {title ? <h2 className={containerStyles.container__title}>{title}</h2> : null}
        <p className={styles["history__description"]}>
          {description}
        </p>
      </VisibilityManager>
    </section>
  );
}
