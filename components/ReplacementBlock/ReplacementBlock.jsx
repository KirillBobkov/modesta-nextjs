import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import  styles from "./ReplacementBlock.module.css";
import { Carousel } from "react-responsive-carousel";
import { ArrowButton } from "../ScrollTopButton/ScrollTopButton.jsx";
import replacementPart1 from '../../public/images/replacement_part_1.webp';
import replacementPart5 from '../../public/images/replacement_part_5.webp';
import replacementPart2 from '../../public/images/replacement_part_2.webp';
import replacementPart3 from '../../public/images/replacement_part_3.webp';
import replacementPart4 from '../../public/images/replacement_part_4.webp';
import replacementPart1_mobile from '../../public/images/replacement_part_1_mobile.webp';
import replacementPart5_mobile from '../../public/images/replacement_part_5_mobile.webp';
import replacementPart2_mobile from '../../public/images/replacement_part_2_mobile.webp';
import replacementPart3_mobile from '../../public/images/replacement_part_3_mobile.webp';
import replacementPart4_mobile from '../../public/images/replacement_part_4_mobile.webp';
import { useWindowWidth } from "../../hooks/useWindowWidth.jsx";
import Image from "next/image.js";
import containerStyles from '../../styles/container.module.css';

export function ReplacementBlock() {
    const isMobile = useWindowWidth() <= 768;
    return (
        <VisibilityManager classes={`${containerStyles.container} ${containerStyles['container--full-width']} ${styles['replacement-parts__container']}`}>
            <div className={styles['replacement-parts']} id="replacement-parts">
                <VisibilityManager side="left" classes={styles['replacement-parts__title']}>Выбери свой стиль</VisibilityManager>
                <Carousel
                    className={styles['replacement-parts__carousel']}
                    showArrows={true}
                    showStatus={false}
                    showIndicators={isMobile}
                    showThumbs={false}
                    swipeScrollTolerance={30}
                    preventMovementUntilSwipeScrollTolerance={true}
                    transitionTime={800}
                    infiniteLoop={true}
                    renderArrowPrev={(clickHandler) => <div className={styles["replacement-parts__arrow--left"]}><ArrowButton onClick={clickHandler} /></div>}
                    renderArrowNext={(clickHandler) => <div className={styles["replacement-parts__arrow--right"]}><ArrowButton onClick={clickHandler} /></div>}
                >
                <Image className={styles['replacement-parts__item']} src={isMobile ? replacementPart1_mobile : replacementPart1} alt="Вариант протеза с расцветкой №1" />
                <Image className={styles['replacement-parts__item']} src={isMobile ? replacementPart2_mobile : replacementPart2} alt="Вариант протеза с расцветкой №2" />
                <Image className={styles['replacement-parts__item']} src={isMobile ? replacementPart3_mobile : replacementPart3} alt="Вариант протеза с расцветкой №3" />
                <Image className={styles['replacement-parts__item']} src={isMobile ? replacementPart4_mobile : replacementPart4} alt="Вариант протеза с расцветкой №4" />
                <Image className={styles['replacement-parts__item']} src={isMobile ? replacementPart5_mobile : replacementPart5} alt="Вариант протеза с расцветкой №5" />
                </Carousel>
            </div>
        </VisibilityManager>
    );
}

