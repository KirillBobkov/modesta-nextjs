import React from 'react';
import styles from './styles/MediaGrid.module.css';

const MediaGrid = ({ attachments }) => {
  // Filter attachments by type for easier rendering
  const photos = attachments.filter((a) => a.type === "photo");
  const videos = attachments.filter((a) => a.type === "video");
  const links = attachments.filter((a) => a.type === "link");

  // No media to show
  if (attachments.length === 0) {
    return null;
  }

  return (
    <div className={styles.mediaContainer}>
      {/* Photo Gallery */}
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

      {/* Video Gallery */}
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

      {/* Link Previews */}
      {links.length > 0 && (
        <div className={styles.mediaGrid}>
          {links.map((link, index) => (
            <a 
              key={`link-${index}`}
              className={styles.link} 
              target="_blank" 
              href={link.url}
              rel="noopener noreferrer"
            >
              <img
                src={link.image || 'https://cache3.youla.io/files/images/720_720_out/5d/e3/5de3cf0866fb070cf1104855.jpg'}
                alt={`Link Preview ${index + 1}`}
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
};

export default MediaGrid; 