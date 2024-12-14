import React from "react";
import styles from "./VideoPlayer.module.css";
import { Video } from "../VideoWidget/VideoWidget";
import shadowStyles from "../../styles/shadow.module.css";

export const VideoPlayer = ({ video }) => {
  return (
    <div
      itemScope
      itemType="http://schema.org/VideoObject"
      className={`${styles.container} ${shadowStyles.shadow}`}
    >
      <meta itemProp="name" content={video.name} />
      <meta itemProp="uploadDate" content={video.uploadDate} />
      <link itemProp="thumbnailUrl" href={video.thumbnailUrl} />
      <iframe
        className={styles.video__frame}
        src={video.link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
