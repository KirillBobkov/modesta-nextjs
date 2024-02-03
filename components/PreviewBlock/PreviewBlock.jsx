import React, { useRef } from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import styles from "./PreviewBlock.module.css";

export const FullPageVideo = React.forwardRef(({ src, poster }, ref) => {
  return (
    <section
      className={styles["full-page-video"]}
    >
      <video
        ref={ref}
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
})

export function PreviewBlock({ img, video, poster, title, subTitle }) {
  const videoRef = useRef();
  if (img) {
    return (
      <section
        className={styles.preview}
        style={{ backgroundImage: `url(${img})` }}
      >
          {title || subTitle ? (
            <VisibilityManager
              as="div"
              className={styles.preview__title}
            >
              {title ? (
                <h2 className={styles["preview__main-line"]}>{title}</h2>
              ) : null}
              {subTitle ? (
                <p className={styles["preview__secondary-line"]}>{subTitle}</p>
              ) : null}
            </VisibilityManager>
          ) : null}
      </section>
    );
  }

  if (video) {
    return (
      <VisibilityManager side={'opacity'} onClick={() => { videoRef?.current?.play(); }} className={styles["preview"]}>
          {title || subTitle ? (
            <div className={styles.preview__title}>
              {title ? (
                <h1 className={styles["preview__main-line"]}>{title}</h1>
              ) : null}
              {subTitle ? (
                <p className={styles["preview__secondary-line"]}>{subTitle}</p>
              ) : null}
            </div>
          ) : null}
        <FullPageVideo
          ref={videoRef}
          src={video}
          poster={poster}
        />
      </VisibilityManager>
    );
  }
}
