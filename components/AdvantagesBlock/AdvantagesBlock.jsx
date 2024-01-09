import advantage_1 from "../../public/images/advantage_1.webp";
import advantage_1_mobile from "../../public/images/advantage_1_mobile.webp";

import advantage_2 from "../../public/images/advantage_2.webp";
import advantage_2_mobile from "../../public/images/advantage_2_mobile.webp";

import advantage_3 from "../../public/images/advantage_3.webp";
import advantage_3_mobile from "../../public/images/advantage_3_mobile.webp";

import styles from "./AdvantagesBlock.module.css";
import containerStyles from "../../styles/container.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";

export function AdvantagesBlock() {
  return (
    <VisibilityManager classes={containerStyles.container}>
      <h2 className={containerStyles.container__title} id="advantages">
        Наши преимущества
      </h2>
      <ul className={styles["advantages"]}>
        <VisibilityManager
          as="li"
          side="topmax"
          classes={`${styles["advantages__item"]} shadow `}
        >
          <picture>
            <source
              srcSet={advantage_1_mobile.src}
              media="(max-width: 768px)"
            />
            <img
              className={styles["advantage__item-image"]}
              src={advantage_1.src}
              alt="Изображение протеза #1"
            />
          </picture>
          <div className={styles["advantages__content"]}>
            <p className={styles["advantages__item-text"]}>Эффективность</p>
            <p className={styles["advantages__item-description"]}>
              Протезы с роботизированным захватом обеспечивают возможность
              управлять объектами разнообразных форм
            </p>
          </div>
        </VisibilityManager>
        <VisibilityManager
          as="li"
          side="topmax"
          classes={`${styles["advantages__item"]} ${styles["advantages__item--right"]} shadow`}
        >
           <picture>
            <source
              srcSet={advantage_2_mobile.src}
              media="(max-width: 768px)"
            />
            <img
              className={styles["advantage__item-image"]}
              src={advantage_2.src}
              alt="Изображение протеза #2"
            />
          </picture>
          <div className={styles["advantages__content"]}>
            <p className={styles["advantages__item-text"]}>
              Сменные конечности
            </p>
            <p className={styles["advantages__item-description"]}>
              Заменяемые части протеза обеспечивают его удобство в использовании
              в различных местах: на улице, дома или в мастерской
            </p>
          </div>
        </VisibilityManager>
        <VisibilityManager
          as="li"
          side="topmax"
          classes={`${styles["advantages__item"]} shadow`}
        >
           <picture>
            <source
              srcSet={advantage_3_mobile.src}
              media="(max-width: 768px)"
            />
            <img
              className={styles["advantage__item-image"]}
              src={advantage_3.src}
              alt="Изображение протеза #3"
            />
          </picture>
          <div className={styles["advantages__content"]}>
            <p className={styles["advantages__item-text"]}>
              Простое обслуживание
            </p>
            <p className={styles["advantages__item-description"]}>
              Ремонт протеза доступен для самостоятельного выполнения дома или
              через наш сервис для оперативного устранения неполадок
            </p>
          </div>
        </VisibilityManager>
      </ul>
    </VisibilityManager>
  );
}
