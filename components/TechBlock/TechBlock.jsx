import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import { useTheme } from "../../hooks/useTheme.jsx";
import tech_background_white from "../../public/images/tech_background_white.webp";
import tech_background_black from "../../public/images/tech_background_black.webp";
import tech_background_white_mobile from "../../public/images/tech_background_white_mobile.webp";
import tech_background_black_mobile from "../../public/images/tech_background_black_mobile.webp";

import styles from "./TechBlock.module.css";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";
import containerStyles from "../../styles/container.module.css";

export function TechBlock() {
  const { theme } = useTheme();
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);

  return (
    <VisibilityManager
      style={theme !== undefined && isMobile !== undefined ? {
        backgroundImage: `url(${
          theme === "light"
            ? isMobile
              ? tech_background_white_mobile.src
              : tech_background_white.src
            : isMobile
            ? tech_background_black_mobile.src
            : tech_background_black.src
        })`,
      }: {}}
      className={styles["tech-container"]}
    >
      <h2 className={styles.tech__title} id="tech">
        Технические характеристики
      </h2>
      <ul className={styles.tech}>
        <VisibilityManager
          as="li"
          className={`${styles.tech__item} shadow`}
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
          className={`${styles.tech__item} shadow`}
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
          className={`${styles.tech__item} shadow`}
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
          className={`${styles.tech__item} shadow`}
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
