import React, { useRef } from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import styles from "./PreviewBlock.module.css";

export const FullPageVideo = React.forwardRef(({ video }, ref) => {
  return (
    <div itemType="http://schema.org/VideoObject" className={styles["full-page-video"]}>
      <meta itemProp="name" content={video.name} />
      <meta itemProp="uploadDate" content={video.uploadDate} />
      <link itemProp="thumbnailUrl" href={video.thumbnailUrl} />
      <video loading="lazy" ref={ref} className={styles["full-page-video__video"]} preload="none" poster={video.poster} autoPlay loop muted playsInline>
        <source src={video.link} type="video/mp4"></source>
      </video>
    </div>
  );
});

export function PreviewBlock({ img, video, title, subTitle }) {
  const videoRef = useRef();
  if (img) {
    return (
      <section className={styles.preview} style={{ backgroundImage: `url(${img})` }}>
        {title || subTitle ? (
          <VisibilityManager as="div" className={styles.preview__title}>
            {title ? <h2 className={styles["preview__main-line"]}>{title}</h2> : null}
            {subTitle ? <p className={styles["preview__secondary-line"]}>{subTitle}</p> : null}
          </VisibilityManager>
        ) : null}
      </section>
    );
  }

  if (video) {
    return (
      <VisibilityManager
        side={"opacity"}
        onClick={() => {
          videoRef?.current?.play();
        }}
        className={styles["preview"]}
      >
        {title || subTitle ? (
          <div className={styles.preview__title}>
            {title ? <h1 className={styles["preview__main-line"]}>{title}</h1> : null}
            {subTitle ? <p className={styles["preview__secondary-line"]}>{subTitle}</p> : null}
          </div>
        ) : null}
        <FullPageVideo ref={videoRef} video={video} />
      </VisibilityManager>
    );
  }
}
