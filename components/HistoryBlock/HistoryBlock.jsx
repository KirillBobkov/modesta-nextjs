import React from "react";
import styles from "./HistoryBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import containerStyles from "../../styles/container.module.css";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";
import { useTheme } from "../../hooks/useTheme.jsx";
import Image from "next/image.js";
export function HistoryBlock({ title, description }) {
  const { theme } = useTheme();
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);
  
  return (
    <section
      className={`${styles.history} ${containerStyles.container} ${containerStyles['container--full-width']}`} id="history"
    >
      <VisibilityManager as="div" className={`${styles.history__content}`}>
        {title ? <h2 className={containerStyles.container__title}>{title}</h2> : null}
        <p className={styles["history__description"]}>
          {description}
        </p>
      </VisibilityManager>
    </section>
  );
}