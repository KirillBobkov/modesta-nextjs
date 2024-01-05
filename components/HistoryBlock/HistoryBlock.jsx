import React from "react";

import styles from "./HistoryBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";

export function HistoryBlock({ title, subTitle, description }) {
    return (
        <section className={styles.history} id="history">
            <VisibilityManager as="div" side="topmax" classes={styles.history__content}>
                {title ? <h2 className={styles['history__title']}>{title}</h2> : null}
                {subTitle ? <p className={`${styles['history__description']} ${styles['history__description--subtitle']}`}>
                    {subTitle}
                </p> : null}
                {description ? <p className={styles['history__description']}>
                   {description}
                </p> : null}
            </VisibilityManager>
        </section>
    );
}

