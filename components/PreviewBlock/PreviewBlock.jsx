import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import styles from "./PreviewBlock.module.css";

export function FullPageVideo({ src, poster }) {
  return (
    <section
      className={styles["full-page-video"]}
    >
      <video
        className={styles["full-page-video__video"]}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={src} type="video/mp4"></source>
      </video>
    </section>
  );
}

export function PreviewBlock({ img, video, poster, title, subTitle }) {
  if (img) {
    return (
      <section
        className={styles.preview}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className={styles["preview__title-container"]}>
          {title || subTitle ? (
            <VisibilityManager
              as="div"
              classes={styles.preview__title}
              side="top"
            >
              {title ? (
                <h2 className={styles["preview__main-line"]}>{title}</h2>
              ) : null}
              {subTitle ? (
                <p className={styles["preview__secondary-line"]}>{subTitle}</p>
              ) : null}
            </VisibilityManager>
          ) : null}
        </div>
      </section>
    );
  }

  if (video) {
    return (
      <section className={styles["preview"]}>
        <div className={styles["preview__title-container"]}>
          {title || subTitle ? (
            <VisibilityManager as="div" classes="preview__title" side="left">
              {title ? (
                <h1 className={styles["preview__main-line"]}>{title}</h1>
              ) : null}
              {subTitle ? (
                <p className={styles["preview__secondary-line"]}>{subTitle}</p>
              ) : null}
            </VisibilityManager>
          ) : null}
        </div>
        <FullPageVideo
          src={video}
          poster={poster}
        />
      </section>
    );
  }
}
