import React, { useState } from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ArrowButton } from "../ScrollTopButton/ScrollTopButton.jsx";
import replacementPart1 from "../../assets/images/replacement_part_1.webp";
import replacementPart5 from "../../assets/images/replacement_part_5.webp";
import replacementPart2 from "../../assets/images/replacement_part_2.webp";
import replacementPart3 from "../../assets/images/replacement_part_3.webp";
import replacementPart4 from "../../assets/images/replacement_part_4.webp";
import replacementPart1_mobile from "../../assets/images/replacement_part_1_mobile.webp";
import replacementPart5_mobile from "../../assets/images/replacement_part_5_mobile.webp";
import replacementPart2_mobile from "../../assets/images/replacement_part_2_mobile.webp";
import replacementPart3_mobile from "../../assets/images/replacement_part_3_mobile.webp";
import replacementPart4_mobile from "../../assets/images/replacement_part_4_mobile.webp";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";
import Image from "next/image.js";

export function ReplacementBlock() {
  const isDesktop = useMediaQuery(`(min-width: 768px)`);

  const desktopImages = [
    replacementPart1,
    replacementPart2,
    replacementPart3,
    replacementPart4,
    replacementPart5,
  ];

  const mobileImages = [
    replacementPart1_mobile,
    replacementPart2_mobile,
    replacementPart3_mobile,
    replacementPart4_mobile,
    replacementPart5_mobile,
  ];

  const images = isDesktop ? desktopImages : mobileImages;

  return (
    <VisibilityManager
      className="max-w-full w-full mx-auto p-0 mb-15 md:mb-30 bg-gradient-to-r from-[var(--bg-color-gradient-1)] via-[10%] to-[var(--bg-color-gradient-2)] to-[90%]"
    >
      <div 
        className="w-full pb-8 min-h-auto h-auto md:min-h-[700px] md:pt-15 relative overflow-hidden flex flex-col items-center justify-center" 
        id="replacement-parts"
      >
        <VisibilityManager className="text-[var(--font-color)] w-full text-center text-[32px] leading-[38px] px-5 py-10 mt-0 mb-0 md:w-auto md:text-[52px] md:leading-[60px] md:p-5 md:mb-0 font-bold uppercase">
          Выбери свой стиль
        </VisibilityManager>
        <Carousel
          className="[&_.control-dots]:bottom-[-10px] md:[&_.control-dots]:bottom-auto"
          showArrows={true}
          showStatus={false}
          showIndicators={!isDesktop}
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
            <BlockImage key={i} src={src} i={i} />
          ))}
        </Carousel>
      </div>
    </VisibilityManager>
  );
}

const BlockImage = ({ src, i }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      className={`w-4/5 object-contain max-h-[600px] md:max-h-none opacity-0 transition-all duration-[800ms] ease-in-out ${loaded ? 'opacity-100' : ''}`}
      src={src}
      alt={`Вариант протеза с расцветкой №${i + 1}`}
      onLoad={() => setLoaded(true)}
    />
  );
};
