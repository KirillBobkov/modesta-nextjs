import React, { useState } from "react";
import { VisibilityManager } from "./VisibilityManager.jsx";
import styles from "./PhotoSliderBlock.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ArrowButton } from "./ScrollTopButton/ScrollTopButton.jsx";
import { useMediaQuery } from "../hooks/useMediaQuery.jsx";
import Image from "next/image.js";

export function PhotoSliderBlock({
  title,
  desktopImages = [],
  mobileImages = [],
  id,
  className = "",
  showArrows = true,
  showIndicators = null // null = auto (based on device)
}) {
  const isDesktop = useMediaQuery(`(min-width: 768px)`);

  const images = isDesktop ? desktopImages : (mobileImages.length > 0 ? mobileImages : desktopImages);
  const shouldShowIndicators = showIndicators !== null ? showIndicators : !isDesktop;

  const containerClassName = className
    ? styles.container + " " + className
    : styles.container;

  return (
    <VisibilityManager
      className={containerClassName}
    >
      <div
        className={styles.contentWrapper}
        id={id}
      >
        {title && (
          <VisibilityManager className={styles.title}>
            {title}
          </VisibilityManager>
        )}
        <Carousel
          className={styles.carousel + " " + styles.carouselControlDots + " " + styles.carouselSlider + " " + styles.sliderWrapper + " " + styles.slider + " " + styles.slide}
          showArrows={showArrows}
          showStatus={false}
          showIndicators={shouldShowIndicators}
          showThumbs={false}
          swipeScrollTolerance={30}
          preventMovementUntilSwipeScrollTolerance={true}
          transitionTime={800}
          infiniteLoop={true}
          renderArrowPrev={(clickHandler) => (
            <div className={styles.arrowPrev}>
              <ArrowButton onClick={clickHandler} />
            </div>
          )}
          renderArrowNext={(clickHandler) => (
            <div className={styles.arrowNext}>
              <ArrowButton onClick={clickHandler} />
            </div>
          )}
        >
          {images.map((src, i) => (
            <SliderImage key={i} src={src} i={i} />
          ))}
        </Carousel>
      </div>
    </VisibilityManager>
  );
}

const SliderImage = ({ src, i, altText }) => {
  const [loaded, setLoaded] = useState(false);

  const imageClassName = loaded
    ? styles.image + " " + styles.imageLoaded
    : styles.image;

  return (
    <Image
      className={imageClassName}
      src={src}
      alt={altText || `Изображение №${i + 1}`}
      onLoad={() => setLoaded(true)}
    />
  );
};
