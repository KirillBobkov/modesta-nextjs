import React from "react";
import Image from "next/image.js";
import styles from "./RoadmapBlock.module.css";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import { VisibilityManager } from "../VisibilityManager";
import { roadmapContent } from "../../content/roadmap";

export default function RoadmapBlock() {
  return (
    <VisibilityManager className={containerStyles.container}>
      <h2
        className={`${containerStyles.container__title} ${styles.roadmap__title}`}
        id="articles"
      >
        {roadmapContent.title}
      </h2>
      <div className={styles.roadmap}>
        <div className={styles["roadmap__line-container"]}>
          <div className={styles.roadmap__line} />
        </div>
        <div className={styles.roadmap__content}>
          {roadmapContent.blocks.map(({ title, description, image }, i) => {
            return (
              <PeriodComponent
                key={i}
                title={title}
                description={description}
                image={image}
              />
            );
          })}
        </div>
      </div>
    </VisibilityManager>
  );
}

function PeriodComponent({ title, description, image }) {
  return (
    <VisibilityManager
      itemScope
      itemType="http://schema.org/ImageObject"
      className={`${styles.period} ${shadowStyles.shadow}`}
      side="topmax"
    >
      <div
        className={`${styles.roadmap__point} ${styles["period__time-point"]}`}
      />
      <div className={styles.period__content}>
        <h3 itemProp="name" className={styles.period__title}>
          {title}
        </h3>
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
      priority
      alt={`Период времени №${1}`}
      itemProp="contentUrl"
      className={`${styles.period__img} ${shadowStyles.shadow}`}
      src={img}
    />
  );
}

