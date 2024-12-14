import styles from "./ProductionBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import Image from "next/image.js";
import { productionContent } from "../../content/production.js";
import { useState } from "react";

export function ProductionBlock() {
  return (
    <section
      className={`${styles.production__container} ${containerStyles.container}`}
    >
      <ul>
        {productionContent.map((production, i) => (
          <Production production={production} i={i}/>
        ))}
      </ul>
    </section>
  );
}

const Production = ({ production, i }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <VisibilityManager
    itemScope
    itemType="http://schema.org/ImageObject"
    as="li"
    key={i}
    className={`${styles.production__item}`}
    id="production"
  >
    <Image
      itemProp="contentUrl"
      className={styles.production__image + " " + shadowStyles.shadow  + ' ' + (loaded ? styles.loaded : '')}
      src={production.img}
      alt={production.alt}
      onLoad={() => setLoaded(true)}
    />
   
    <div className={styles.production__content + ' ' + shadowStyles.shadow}>
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
  );
};