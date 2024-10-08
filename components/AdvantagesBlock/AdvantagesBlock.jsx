

import styles from "./AdvantagesBlock.module.css";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import Image from "next/image.js";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";
import { advantagesContent } from '../../content/advantages.js';

export function AdvantagesBlock() {
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);

  return (
    <VisibilityManager className={containerStyles.container}>
      <h2 className={containerStyles.container__title} id="advantages">
        {advantagesContent.title}
      </h2>
      <ul className={styles["advantages"]}>
        {advantagesContent.blocks.map((adv, i) => {
          return (
            <VisibilityManager
              itemScope
              itemType="http://schema.org/ImageObject"
              as="li"
              key={i}
              className={`${styles["advantages__item"]} ${
                adv.right ? styles["advantages__item--right"] : ""
              } ${shadowStyles.shadow}`}
            >
              {isMobile !== undefined && (
                <Image         
                  itemProp="contentUrl"
                  className={styles["advantage__item-image"]}
                  src={isMobile ? adv.mobileImg : adv.desktopImg}
                  alt={`Изображение протеза #${i}`}
                  fill
                />
              )}
              <div className={styles["advantages__content"]}>
                <h3 itemProp="name" className={styles["advantages__item-text"]}>
                  {adv.title}
                </h3>
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
