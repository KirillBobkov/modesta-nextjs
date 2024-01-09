import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import tech_background_white from "../../public/images/tech_background_white.webp";
import tech_background_black from "../../public/images/tech_background_black.webp";
import tech_background_white_mobile from "../../public/images/tech_background_white_mobile.webp";
import tech_background_black_mobile from "../../public/images/tech_background_black_mobile.webp";

import styles from "./TechBlock.module.css";
import containerStyles from "../../styles/container.module.css";

export function TechBlock() {

  return (
    <VisibilityManager
      classes={styles["tech-container"]}
    >
      <picture>
        <source
          srcSet={tech_background_black_mobile.src}
          media="(prefers-color-scheme: dark) and (max-width: 768px)"
        />
        <source
          srcSet={tech_background_white_mobile.src}
          media="(prefers-color-scheme: light) and (max-width: 768px)"
        />
        <source
          srcSet={tech_background_black.src}
          media="(prefers-color-scheme: dark) and (min-width: 769px)"
        />
        <img
          className={styles["tech-container__image"]}
          src={tech_background_white.src}
          alt="Фон для блока хенических характеристик"
        />
      </picture>
      <h2 className={containerStyles.container__title} id="tech">
        Технические характеристики
      </h2>
      <ul className={styles.tech}>
        <VisibilityManager
          as="li"
          side="bottom"
          classes={`${styles.tech__item} shadow`}
        >
          <div className={styles.tech__content}>
            <span className={styles.tech__text}>
              Максимальная ширина раскрытия хвата <br />
              <span className={styles["tech__key-feature"]}>115</span> мм
            </span>
          </div>
        </VisibilityManager>
        <VisibilityManager
          as="li"
          side="bottom"
          classes={`${styles.tech__item} shadow`}
        >
          <div className={styles.tech__content}>
            <span className={styles.tech__text}>
              Вес кисти — не более <br />
              <span className={styles["tech__key-feature"]}>109</span> грамм
            </span>
          </div>
        </VisibilityManager>
        <VisibilityManager
          as="li"
          side="bottom"
          classes={`${styles.tech__item} shadow`}
        >
          <div className={styles.tech__content}>
            <span className={styles.tech__text}>
              Тяговый протез выдержит силу хвата свыше <br />
              <span className={styles["tech__key-feature"]}>25</span> кг
            </span>
          </div>
        </VisibilityManager>
        <VisibilityManager
          as="li"
          side="bottom"
          classes={`${styles.tech__item} shadow`}
        >
          <div className={styles.tech__content}>
            <span className={styles.tech__text}>
              Угол ротации (вращения) устройства
              <br />
              <span className={styles["tech__key-feature"]}>30°</span>
            </span>
          </div>
        </VisibilityManager>
      </ul>
    </VisibilityManager>
  );
}
