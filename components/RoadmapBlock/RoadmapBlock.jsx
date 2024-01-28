import React from "react";
import Image from "next/image.js";
import styles from "./RoadmapBlock.module.css";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";

import roadmap_period1 from "../../public/images/roadmap1.jpg";
import roadmap_period2 from "../../public/images/roadmap2.jpg";
import roadmap_period3 from "../../public/images/roadmap3.jpg";
import roadmap_period4 from "../../public/images/roadmap4.jpg";
import roadmap_period5 from "../../public/images/roadmap5.jpg";
import { VisibilityManager } from "../VisibilityManager";

export default function RoadmapBlock() {
  return (
    <VisibilityManager classes={containerStyles.container}>
      <h1
        className={`${containerStyles.container__title} ${styles.roadmap__title}`}
        id="articles"
      >
        Дорожная карта
      </h1>
      <div className={styles.roadmap}>
        <div className={styles["roadmap__line-container"]}>
          <div className={styles.roadmap__line} />
        </div>
        <div className={styles.roadmap__content}>
          {roadmapContent.map(({ title, description, image }, i) => {
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
      classes={`${styles.period} ${shadowStyles.shadow}`}
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

const roadmapContent = [
  {
    title: "III квартал 2021",
    description:
      "Формирование концепции прототипов, а также проектирование пилотных версий изделий",
    image: roadmap_period1,
  },
  {
    title: "I квартал 2022",
    description:
      'Старт проекта “Протез для Ксюши". Создание первого антропоморфного образца',
    image: roadmap_period2,
  },
  {
    title: "IV квартал 2022",
    description:
      "Подготовка и выступление на “Телемедфоруме 2022” с готовыми прототипами",
    image: roadmap_period3,
  },
  {
    title: "I квартал 2023",
    description:
      "Поиск эффективного вида захватного устройства. Пересмотр концепции протеза руки",
    image: roadmap_period4,
  },
  {
    title: "III квартал 2023",
    description: "Получение статуса резидента ИЦ “Сколково” в кластере Биомед",
    image: roadmap_period5,
  },
];
