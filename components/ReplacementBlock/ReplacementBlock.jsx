import React, { useState } from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./ReplacementBlock.module.css";
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
import containerStyles from "../../styles/container.module.css";

export function ReplacementBlock() {
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);
  return (
    <VisibilityManager
      className={`${containerStyles.container} ${containerStyles["container--full-width"]} ${styles["replacement-parts__container"]}`}
    >
      <div className={styles["replacement-parts"]} id="replacement-parts">
        <VisibilityManager className={styles["replacement-parts__title"]}>
          Выбери свой стиль
        </VisibilityManager>
        <Carousel
          className={styles["replacement-parts__carousel"]}
          showArrows={true}
          showStatus={false}
          showIndicators={isMobile}
          showThumbs={false}
          swipeScrollTolerance={30}
          preventMovementUntilSwipeScrollTolerance={true}
          transitionTime={800}
          infiniteLoop={true}
          renderArrowPrev={(clickHandler) => (
            <div className={styles["replacement-parts__arrow--left"]}>
              <ArrowButton onClick={clickHandler} />
            </div>
          )}
          renderArrowNext={(clickHandler) => (
            <div className={styles["replacement-parts__arrow--right"]}>
              <ArrowButton onClick={clickHandler} />
            </div>
          )}
        >
          {(isMobile
            ? [
                replacementPart1_mobile,
                replacementPart2_mobile,
                replacementPart3_mobile,
                replacementPart4_mobile,
                replacementPart5_mobile,
              ]
            : [
                replacementPart1,
                replacementPart2,
                replacementPart3,
                replacementPart4,
                replacementPart5,
              ]
          ).map((src, i) => (
            <BlockImage key={i} src={src} i={i} isMobile={isMobile} />
          ))}
        </Carousel>
      </div>
    </VisibilityManager>
  );
}

const BlockImage = ({ isMobile, src, i }) => {
    const [loaded, setLoaded] = useState(false);

  return isMobile !== undefined ? (
    <Image
      className={styles["replacement-parts__item"] + ' ' + (loaded ? styles.loaded : '')}
      src={src}
      alt={"Вариант протеза с расцветкой №" + i + 1}
      onLoad={() => setLoaded(true)}
    />
  ) : null;
};
