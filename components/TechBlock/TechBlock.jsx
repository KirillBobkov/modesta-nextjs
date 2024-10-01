import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import { useTheme } from "../../hooks/useTheme.jsx";

import tech_block_img_1 from "../../public/images/tech_block_img_1.jpg";
import tech_block_img_2 from "../../public/images/tech_block_img_2.jpg";
import tech_block_img_3 from "../../public/images/tech_block_img_3.jpg";
import tech_block_img_4 from "../../public/images/tech_block_img_4.jpg";

import styles from "./TechBlock.module.css";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import Image from "next/image.js";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter.jsx";

const items = [
  {
    img: tech_block_img_1,
    text: "Вес кисти",
    key: '300',
    key_param: 'гр.'
  },
  {
    img: tech_block_img_2,
    text: "Сила хвата",
    key: '25',
    key_param: 'кг'
  },
  {
    img: tech_block_img_3,
    text: "Угол вращения кисти",
    key: '180',
    key_param: '°'
  },
  {
    img: tech_block_img_4,
    text: "Ширина хвата",
    key: '115',
    key_param: 'мм'
  },
]

export function TechBlock() {
  const { theme } = useTheme();
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);

  return (
    <VisibilityManager
      // style={
      //   theme !== undefined && isMobile !== undefined
      //     ? {
      //         backgroundImage: `url(${
      //           theme === "light"
      //             ? isMobile
      //               ? tech_background_white_mobile.src
      //               : tech_background_white.src
      //             : isMobile
      //             ? tech_background_black_mobile.src
      //             : tech_background_black.src
      //         })`,
      //       }
      //     : {}
      // }
      className={containerStyles["container"]}
    >
      <h2 className={`${containerStyles.container__title}`} id="tech">
        Технические характеристики
      </h2>
      <ul className={styles.tech}>
        {items.map((item, i) => {
          return  <VisibilityManager key={i} as="li" className={`${styles.tech__item} ${shadowStyles.shadow}`}>
                <Image        
                  itemProp="contentUrl"
                  className={styles["tech__item-image"]}
                  src={item.img.src}
                  alt={`Характеристика #${i}`}
                  fill
                />
          <div className={styles.tech__content}>
          <span className={styles.tech__text}>
              {item.text} <br />
              <span className={styles["tech__key-feature"]}>
              <AnimatedCounter start={0} end={item.key}></AnimatedCounter>
                </span>
                <span className={styles["tech__key-feature-param"]}>{item.key_param}</span>
            </span>
          </div>
        </VisibilityManager>
        })}
      </ul>
    </VisibilityManager>
  );
}
