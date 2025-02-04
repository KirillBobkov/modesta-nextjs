import styles from "./NewsFeed.module.css";

export function MediaGrid({ attachments }) {
  const photos = attachments.filter((a) => a.type === "photo");
  const videos = attachments.filter((a) => a.type === "video");
  const link = attachments.filter((a) => a.type === "link");

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
      {link.length > 0 && (
        <div className={styles.mediaGrid}>
          {link.map((link, index) => (
            <a className={styles.link} target="_blank" href={link.url}>
              <img
                key={`link-photo-${index}`}
                src={link.image || 'https://cache3.youla.io/files/images/720_720_out/5d/e3/5de3cf0866fb070cf1104855.jpg'}
                alt={`Link Photo ${index + 1}`}
                className={styles.link_image}
              />
              <p>Просмотр по ссылке:</p>
              <p>{link.title}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
