import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import styles from "./VideosBlock.module.css";

import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import { videosContent } from "../../content/video.js";

export function VideosBlock() {
  return (
    <VisibilityManager className={containerStyles.container}>
      <div className={styles.videos__content}>
        <h2 className={containerStyles.container__title} id="videos">
          {videosContent.title}
        </h2>
        <p className={styles.videos__description}>{videosContent.description}</p>
      </div>
      <ul className={styles.videos}>
        {videosContent.videos.map((video, i) => {
          return (
            <VisibilityManager
              itemScope
              as="li"
              key={i}
              itemType="http://schema.org/VideoObject"
              className={`${styles.videos__item} ${shadowStyles.shadow}`}
            >
              <iframe
                className={styles.videos__frame}
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </VisibilityManager>
          );
        })}
      </ul>
    </VisibilityManager>
  );
}
