import React, { useState } from "react";
import { VisibilityManager } from "./VisibilityManager.jsx";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ArrowButton } from "./ScrollTopButton.jsx";
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

  return (
    <VisibilityManager
      className={`max-w-full w-full mx-auto p-0 mb-15 md:mb-30  ${className}`}
    >
      <div 
        className="w-auto pb-8 md:pt-15 relative overflow-hidden flex flex-col items-center justify-center" 
        id={id}
      >
        {title && (
          <VisibilityManager className="text-[var(--font-color)] w-full text-center text-[32px] leading-[38px] px-5 py-10 mt-0 mb-0 md:w-auto md:text-[52px] md:leading-[60px] md:p-5 md:mb-[40px] font-bold uppercase">
            {title}
          </VisibilityManager>
        )}
        <Carousel
          className=" [&_.control-dots]:bottom-[-10px] md:[&_.control-dots]:bottom-auto [&_.carousel.carousel-slider]:h-full [&_.slider-wrapper]:h-full [&_.slider]:h-full [&_.slider]:items-center lign-middle [&_.slide]:h-full"
          showArrows={showArrows}
          showStatus={false}
          showIndicators={shouldShowIndicators}
          showThumbs={false}
          swipeScrollTolerance={30}
          preventMovementUntilSwipeScrollTolerance={true}
          transitionTime={800}
          infiniteLoop={true}
          renderArrowPrev={(clickHandler) => (
            <div className="absolute z-[2] left-5 top-[calc(50%-30px)] -rotate-90">
              <ArrowButton onClick={clickHandler} />
            </div>
          )}
          renderArrowNext={(clickHandler) => (
            <div className="absolute z-[2] right-5 top-[calc(50%-30px)] rotate-90">
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

  return (
    <Image
      className={`w-auto h-full max-h-[700px] object-contain opacity-0 transition-all duration-[800ms] ease-in-out ${loaded ? 'opacity-100' : ''}`}
      src={src}
      alt={altText || `Изображение №${i + 1}`}
      onLoad={() => setLoaded(true)}
    />
  );
}; 