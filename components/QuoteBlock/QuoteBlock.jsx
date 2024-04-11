import styles from "./QuoteBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import containerStyles from "../../styles/container.module.css";

export function QuoteBlock({ title, author, quote }) {
    return (
        <section className={styles.quote} id="quote">
            <VisibilityManager as="div" className={styles.quote__content}>
                {title ? <h2 className={containerStyles.container__title}>{title}</h2> : null}
                {quote ? <p className={styles.quote__description}>
                   {quote}
                </p> : null}
                {author ? <span className={styles.quote__author}>{author}</span> : null}
            </VisibilityManager>
        </section>
    );
}
