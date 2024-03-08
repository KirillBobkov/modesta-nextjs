import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import { useTheme } from "../../hooks/useTheme.jsx";
import tech_background_white from "../../public/images/tech_background_white.webp";
import tech_background_black from "../../public/images/tech_background_black.webp";
import tech_background_white_mobile from "../../public/images/tech_background_white_mobile.webp";
import tech_background_black_mobile from "../../public/images/tech_background_black_mobile.webp";
import tech_block_img_1 from "../../public/images/tech_block_img_1.jpg";
import tech_block_img_2 from "../../public/images/tech_block_img_2.jpg";
import tech_block_img_3 from "../../public/images/tech_block_img_3.jpg";
import tech_block_img_4 from "../../public/images/tech_block_img_4.jpg";

import styles from "./TechBlock.module.css";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";

const items = [
  {
    img: tech_block_img_1,
    text: "Вес кисти",
    key: '300',
    key_param: 'грамм'
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
    key: '180°',
    key_param: ''
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
      style={
        theme !== undefined && isMobile !== undefined
          ? {
              backgroundImage: `url(${
                theme === "light"
                  ? isMobile
                    ? tech_background_white_mobile.src
                    : tech_background_white.src
                  : isMobile
                  ? tech_background_black_mobile.src
                  : tech_background_black.src
              })`,
            }
          : {}
      }
      className={styles["tech-container"]}
    >
      <h2 className={`${containerStyles.container__title} ${containerStyles["container__title--always-center"]}`} id="tech">
        Технические характеристики
      </h2>
      <ul className={styles.tech}>
        {items.map((item, i) => {
          return  <VisibilityManager key={i} style={{ backgroundImage: `url(${item.img.src})` }} as="li" className={`${styles.tech__item} ${shadowStyles.shadow}`}>
          <div className={styles.tech__content}>
          <span className={styles.tech__text}>
              {item.text} <br />
              <span className={styles["tech__key-feature"]}>{item.key}</span>{item.key_param}
            </span>
          </div>
        </VisibilityManager>
        })}
      </ul>
    </VisibilityManager>
  );
}
