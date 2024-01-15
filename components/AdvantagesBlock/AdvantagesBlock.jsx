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

const advantages = [
  {
    title: "Эффективность",
    description:
      "Протезы с роботизированным захватом обеспечивают возможность управлять объектами разнообразных форм",
    mobileImg: advantage_1_mobile.src,
    desktopImg: advantage_1.src,
    right: false,
  },
  {
    title: "Сменные конечности",
    description:
      "Заменяемые части протеза обеспечивают его удобство в использовании в различных местах: на улице, дома или в мастерской",
    mobileImg: advantage_2_mobile.src,
    desktopImg: advantage_2.src,
    right: true,
  },
  {
    title: "Простое обслуживание",
    description:
      "Ремонт протеза доступен для самостоятельного выполнения дома или через наш сервис для оперативного устранения неполадок",
    mobileImg: advantage_3_mobile.src,
    desktopImg: advantage_3.src,
    right: false,
  },
];

export function AdvantagesBlock() {
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);

  return (
    <VisibilityManager classes={containerStyles.container}>
      <h2 className={containerStyles.container__title} id="advantages">
        Наши преимущества
      </h2>
      <ul className={styles["advantages"]}>
        {advantages.map((adv, i) => {
          return (
            <VisibilityManager
              itemScope
              itemType="http://schema.org/ImageObject"
              as="li"
              side="topmax"
              classes={`${styles["advantages__item"]} ${
                adv.right ? styles["advantages__item--right"] : ""
              } shadow`}
            >
              {isMobile !== undefined && (
                <Image
                  itemProp="contentUrl"
                  className={styles["advantage__item-image"]}
                  src={isMobile ? adv.mobileImg : adv.desktopImg}
                  objectPosition="top"
                  objectFit="cover"
                  alt={`Изображение протеза #${i}`}
                  fill
                />
              )}
              <div className={styles["advantages__content"]}>
                <p itemProp="name" className={styles["advantages__item-text"]}>
                  {adv.title}
                </p>
                <p className={styles["advantages__item-description"]}>
                  {adv.description}
                </p>
              </div>
            </VisibilityManager>
          );
        })}
      </ul>
    </VisibilityManager>
  );
}
