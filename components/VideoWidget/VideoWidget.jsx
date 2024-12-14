import React, { useState } from "react";
import styles from "./VideoWidget.module.css";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
import { VideoList } from "../VideoList/VideoList";
import { VisibilityManager } from "../VisibilityManager";
import { videosContent } from "../../content/video.js";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";

export const VideoWidget = () => {
  const [selectedVideo, setSelectedVideo] = useState(videosContent.videos[0]);

  return (
    <div className={styles.container} id="videos">
      <VisibilityManager
        itemProp="name"
        as="h2"
        className={`${styles.grid__title} ${containerStyles.container__title}`}
      >
        {videosContent.title}
      </VisibilityManager>

      <VisibilityManager
        as="p"
        className={`${styles.grid__description}`}
      >
        {videosContent.description}
      </VisibilityManager>

      <div className={styles.content}>
        <div className={styles.listSection}>
          <VideoList
            videos={videosContent.videos}
            selectedVideo={selectedVideo}
            onVideoSelect={setSelectedVideo}
          />
        </div>
        <VisibilityManager className={styles.playerSection}>
          <VideoPlayer video={selectedVideo} />
        </VisibilityManager>
      </div>
    </div>
  );
};
