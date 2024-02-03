import styles from "./QuoteBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";

export function QuoteBlock({ title, author, quote }) {
    return (
        <section className={styles.quote} id="quote">
            <VisibilityManager as="div" side="topmax" className={styles.quote__content}>
                {title ? <h2 className={styles.quote__title}>{title}</h2> : null}
                {quote ? <p className={styles.quote__description}>
                   {quote}
                </p> : null}
                {author ? <span className={styles.quote__author}>{author}</span> : null}
            </VisibilityManager>
        </section>
    );
}
