import React from "react";
import styles from "./HistoryBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import Image from "next/image.js";

export function HistoryBlock({ title, description, image }) {
  return (
    <div className={`${containerStyles.container}`}>
    <VisibilityManager as="section" className={`${styles.history} ${containerStyles.container}`} id="history">
      <Image className={`${styles.history__image} ${shadowStyles.shadow}`} src={image} alt={title}/>
      <div className={`${styles.history__content} ${shadowStyles.shadow}`}>
        {title ? <h2 className={`${containerStyles.container__title} ${styles.history__title}`}>{title}</h2> : null}
        <p className={styles["history__description"]}>
          {description}
        </p>
      </div>
    </VisibilityManager>
    </div>
  );
}
