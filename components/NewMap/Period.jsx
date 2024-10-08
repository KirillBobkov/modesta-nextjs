import React from "react";
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
      <div className={styles.period__content}>
        <p itemProp="description" className={styles.period__description}>
          {description}
        </p>
      </div>
      <PeriodImageComponent img={image} />
    </VisibilityManager>
  );
}

function PeriodImageComponent({ img }) {
  return (
    <Image
      alt={`Период времени №${1}`}
      itemProp="contentUrl"
      className={`${styles.period__img} ${shadowStyles.shadow}`}
      src={img}
    />
  );
}

