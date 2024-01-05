import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import styles from "./VideosBlock.module.css";

import containerStyles from '../../styles/container.module.css';
import shadowStyles from '../../styles/shadow.module.css';

export function VideosBlock() {
    return (
        <VisibilityManager classes={containerStyles.container}>
            <h2 className={containerStyles.container__title} id="videos">Оценить красоту момента помогает кино</h2>
            <p className={styles.videos__description}>Чтобы вы могли оценить нас, снимаем разные видео-ролики о компании, о людях</p>
            <ul className={styles.videos}>
                <VisibilityManager side="topmax" classes={`${styles.videos__item} ${shadowStyles.shadow}`}>
                    <iframe className={styles.videos__frame} src="https://www.youtube.com/embed/2A6QQnWIc_o?si=wBFMxf9fYTWeHmgb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </VisibilityManager>
                <VisibilityManager side="topmax" classes={`${styles.videos__item} ${shadowStyles.shadow}`}>
                    <iframe className={styles.videos__frame} src="https://www.youtube.com/embed/3PvROXkoezI?si=L9emIEvrY5ZRlPIM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </VisibilityManager>
            </ul>
        </VisibilityManager >
    );
}