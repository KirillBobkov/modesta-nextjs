import React from "react";
import styles from "./VideoList.module.css";
import Image from "next/image";
import { VisibilityManager } from "../VisibilityManager";
import shadowStyles from '../../styles/shadow.module.css';
interface VideoListProps {
  videos: any[];
  selectedVideo: any;
  onVideoSelect: (video: any) => void;
}

export const VideoList: React.FC<VideoListProps> = ({
  videos,
  selectedVideo,
  onVideoSelect,
}) => {
  return (
    <VisibilityManager className={styles.container + ' ' + shadowStyles.shadow}>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          {videos.map((video, i) => (
            <button
              key={video.link + i}
              onClick={() => onVideoSelect(video)}
              className={`${styles.item} ${
                selectedVideo.link === video.link ? styles.selected : ""
              }`}
            >
              <div className={styles.thumbnail}>
                <Image
                  width={50}
                  height={50}
                  src={video.thumbnailUrl}
                  alt={""}
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <p className={styles.videoTitle}>{video.name}</p>
              </div>
            </button>
          ))}
        </ul>
      </div>
    </VisibilityManager>
  );
};
