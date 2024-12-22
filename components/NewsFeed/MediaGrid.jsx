import styles from "./NewsFeed.module.css";

export function MediaGrid({ attachments }) {
  const photos = attachments.filter((a) => a.type === "photo");
  const videos = attachments.filter((a) => a.type === "video");

  return (
    <div className={styles.mediaContainer}>
      {photos.length > 0 && (
        <div className={styles.mediaGrid}>
          {photos.map((photo, index) => (
            <img
              key={`photo-${index}`}
              src={photo.photoUrl}
              alt={`Photo ${index + 1}`}
              className={styles.image}
            />
          ))}
        </div>
      )}

      {videos.length > 0 && (
        <div className={styles.mediaGrid}>
          {videos.map((video, index) => (
            <div key={`video-${index}`} className={styles.videoWrapper}>
              <iframe
                className={styles.video_frame}
                src={video.iframe}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
