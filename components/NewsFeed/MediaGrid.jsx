import React, { useState } from 'react';
import styles from './styles/MediaGrid.module.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ArrowButton } from "../ScrollTopButton/ScrollTopButton.jsx";

const MediaGrid = ({ attachments }) => {
  // Filter attachments by type for easier rendering
  const photos = attachments.filter((a) => a.type === "photo");
  const videos = attachments.filter((a) => a.type === "video");
  const links = attachments.filter((a) => a.type === "link");

  // No media to show
  if (attachments.length === 0) {
    return null;
  }

  // Russian plural for "фото"
  const getPhotoNoun = (count) => {
    const lastTwo = count % 100;
    const lastOne = count % 10;
    if (lastTwo >= 11 && lastTwo <= 19) return "фото";
    if (lastOne === 1) return "фото";
    if (lastOne >= 2 && lastOne <= 4) return "фото";
    return "фото";
  };

  // Render photos based on count
  const renderPhotos = () => {
    if (photos.length === 0) return null;

    // 1 photo - full width
    if (photos.length === 1) {
      return (
        <div className={styles.photoSingle}>
          <img
            src={photos[0].photoUrl}
            alt="Фото 1"
            className={styles.photoImage}
          />
        </div>
      );
    }

    // 2 photos - 2 columns
    if (photos.length === 2) {
      return (
        <div className={styles.photoTwo}>
          {photos.map((photo, index) => (
            <img
              key={`photo-${index}`}
              src={photo.photoUrl}
              alt={`Фото ${index + 1}`}
              className={styles.photoImage}
            />
          ))}
        </div>
      );
    }

    // 3+ photos - carousel with arrows
    return (
      <div className={styles.photoCarouselWrapper}>
        <Carousel
          className={styles.photoCarousel}
          showArrows={true}
          showStatus={false}
          showIndicators={photos.length > 3}
          showThumbs={false}
          swipeScrollTolerance={30}
          preventMovementUntilSwipeScrollTolerance={true}
          transitionTime={300}
          infiniteLoop={true}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <div className={styles.carouselArrowPrev}>
              <ArrowButton onClick={clickHandler} />
            </div>
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <div className={styles.carouselArrowNext}>
              <ArrowButton onClick={clickHandler} />
            </div>
          )}
        >
          {photos.map((photo, index) => (
            <div key={`photo-${index}`} className={styles.carouselSlide}>
              <img
                src={photo.photoUrl}
                alt={`Фото ${index + 1}`}
                className={styles.carouselImage}
              />
            </div>
          ))}
        </Carousel>
        <div className={styles.photoCounter}>
          {photos.length} {getPhotoNoun(photos.length)}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.mediaContainer}>
      {/* Photo Gallery */}
      {renderPhotos()}

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
