import advantage_1 from "../../public/images/advantage_1.webp";
import advantage_1_mobile from "../../public/images/advantage_1_mobile.webp";

import advantage_2 from "../../public/images/advantage_2.webp";
import advantage_2_mobile from "../../public/images/advantage_2_mobile.webp";

import advantage_3 from "../../public/images/advantage_3.webp";
import advantage_3_mobile from "../../public/images/advantage_3_mobile.webp";

import styles from "./AdvantagesBlock.module.css";
import containerStyles from "../../styles/container.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import Image from "next/image.js";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";

export function AdvantagesBlock() {
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);

  return (
    <VisibilityManager classes={containerStyles.container}>
      <h2 className={containerStyles.container__title} id="advantages">
        Наши преимущества
      </h2>
      <ul className={styles["advantages"]}>
        <VisibilityManager
          as="li"
          side="topmax"
          itemScope
          itemType="http://schema.org/ImageObject"
          classes={`${styles["advantages__item"]} ${styles["advantages__item--left"]} shadow `}
        >
          {isMobile !== undefined && (
            <Image priority
              itemProp="contentUrl"
              className={styles["advantage__item-image"]}
              src={isMobile ? advantage_1_mobile.src : advantage_1.src}
              objectPosition="top"
              objectFit="cover"
              alt="Изображение протеза #1"
              fill
            />
          )}
          <div className={styles["advantages__content"]}>
            <p itemProp="name" className={styles["advantages__item-text"]}>
              Эффективность
            </p>
            <p
              itemProp="description"
              className={styles["advantages__item-description"]}
            >
              Протезы с роботизированным захватом обеспечивают возможность
              управлять объектами разнообразных форм
            </p>
          </div>
        </VisibilityManager>
        <VisibilityManager
          itemScope
          itemType="http://schema.org/ImageObject"
          as="li"
          side="topmax"
          classes={`${styles["advantages__item"]} ${styles["advantages__item--right"]} shadow`}
        >
          {isMobile !== undefined && (
            <Image priority
              itemProp="contentUrl"
              className={styles["advantage__item-image"]}
              src={isMobile ? advantage_2_mobile.src : advantage_2.src}
              objectPosition="top"
              objectFit="cover"
              alt="Изображение протеза #1"
              fill
            />
          )}
          <div className={styles["advantages__content"]}>
            <p itemProp="name" className={styles["advantages__item-text"]}>
              Сменные конечности
            </p>
            <p className={styles["advantages__item-description"]}>
              Заменяемые части протеза обеспечивают его удобство в использовании
              в различных местах: на улице, дома или в мастерской
            </p>
          </div>
        </VisibilityManager>
        <VisibilityManager
          itemScope
          itemType="http://schema.org/ImageObject"
          as="li"
          side="topmax"
          classes={`${styles["advantages__item"]} shadow`}
        >
          {isMobile !== undefined && (
            <Image priority
              itemProp="contentUrl"
              className={styles["advantage__item-image"]}
              src={isMobile ? advantage_3_mobile.src : advantage_3.src}
              objectPosition="top"
              objectFit="cover"
              alt="Изображение протеза #1"
              fill
            />
          )}
          <div className={styles["advantages__content"]}>
            <p itemProp="name" className={styles["advantages__item-text"]}>
              Простое обслуживание
            </p>
            <p
              itemProp="description"
              className={styles["advantages__item-description"]}
            >
              Ремонт протеза доступен для самостоятельного выполнения дома или
              через наш сервис для оперативного устранения неполадок
            </p>
          </div>
        </VisibilityManager>
      </ul>
    </VisibilityManager>
  );
}
