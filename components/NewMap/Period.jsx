import React, { useState } from "react";
import Image from "next/image.js";
import styles from "./Period.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import { VisibilityManager } from "../VisibilityManager";

export function PeriodComponent({ title, description, image }) {
  return (
    <VisibilityManager
      itemScope
      side="top"
      itemType="http://schema.org/ImageObject"
      className={`${styles.period} ${shadowStyles.shadow}`}
    >
            <PeriodImageComponent img={image} />
      <div className={styles.period__content}>
        <p itemProp="description" className={styles.period__description}>
          {description}
        </p>
      </div>

    </VisibilityManager>
  );
}

function PeriodImageComponent({ img }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      key={img}
      alt={`Период времени №${1}`}
      itemProp="contentUrl"
      className={`${styles.period__img} ${shadowStyles.shadow}`   + ' ' + (loaded ? styles.loaded : '')}
      src={img}
      onLoad={() => setLoaded(true)}
    />
  );
}

