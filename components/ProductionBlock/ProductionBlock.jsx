import styles from "./ProductionBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import Image from "next/image.js";
import { productionContent } from "../../content.ts";

export function ProductionBlock() {
  return (
    <section
      className={`${styles.production__container} ${containerStyles.container}`}
    >
      <ul>
        {productionContent.map((production) => (
          <VisibilityManager
            itemScope
            itemType="http://schema.org/ImageObject"
            as="li"
            side="topmax"
            className={`${styles.production__item} ${shadowStyles.shadow}`}
            id="production"
          >
            <Image
              priority
              itemProp="contentUrl"
              className={styles.production__image}
              src={production.img}
              alt={production.alt}
            />
           
            <div className={styles.production__content}>
              <h3 itemProp="name" className={styles.production__title}>
                {production.title}
              </h3>
              <p
                itemProp="description"
                className={styles.production__description}
              >
                {production.description}
              </p>
            </div>
          </VisibilityManager>
        ))}
      </ul>
    </section>
  );
}
