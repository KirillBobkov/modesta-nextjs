import React from "react";
import { VisibilityManager } from "./VisibilityManager.jsx";
import styles from "./VideosGrid.module.css";

import { videosContent } from "../../content/video.js";
import { GridBlock } from "../GridBlock/GridBlock.jsx";

const VideoCard = ({ item }) => {
  return (
    <div
      itemScope
      itemType="http://schema.org/VideoObject"
                  className={`${styles.videos__item} shadow-lg`}
    >
      <meta itemProp="name" content={item.name} />
      <meta itemProp="uploadDate" content={item.uploadDate} />
      <link itemProp="thumbnailUrl" href={item.thumbnailUrl} />
      <iframe
        className={styles.videos__frame}
        src={item.link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export const VideosGrid = () => {
  return (
    <GridBlock
      title={videosContent.title}
      description={videosContent.description}
      id="videos"
      columns={3}
      clickable
      customItemStyles={{ padding: 0 }}
      content={videosContent.videos}
      renderItem={(item) => <VideoCard item={item} />}
    />
  );
};
