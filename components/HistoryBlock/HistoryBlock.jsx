import React, { useState } from "react";
import styles from "./HistoryBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import Image from "next/image.js";


import history1 from "../../assets/images/history1.jpg";
import history2 from "../../assets/images/history2.jpg";
import history3 from "../../assets/images/history3.jpg";

export const historyContent = {
  blocks: [
    {
      img: history1,
      alt: "Фото технологий и разработки",
      title: "Технологии и разработка",
      description: "Мы специализируемся на разработке протезов для верхних конечностей, включая модели тягового и биоэлектрического типа."
    },
    {
      img: history2,
      alt: "Фото комфорта и функциональности",
      title: "Комфорт и функциональность",
      description: "Наши изделия помогают вернуть утраченные возможности, улучшить функциональность и комфорт, позволяют активно участвовать в повседневных занятиях, работе и социальной жизни."
    },
    {
      img: history3,
      alt: "Фото абилитации и адаптации",
      title: "Абилитация и адаптация",
      description: "Разрабатывая наши прототипы, мы решаем сложные задачи, связанные с функциональностью, хватательной силой, практичностью и долговечностью протезов, а так же обеспечиваем высокий уровень в реабилитации. Мы предоставляем оптимальные решения для адаптации и качества жизни."
    }
  ]
};

export function HistoryBlock() {
  return (
          <div className="max-w-screen-xl w-full mx-auto px-4 mb-15 md:px-10 md:mb-30">
      <VisibilityManager as="ul" style={{ marginTop: "100px" }}>
        {historyContent.blocks.map((item, i) => {
          return <HistoryItem key={i} item={item} i={i} />;
        })}
      </VisibilityManager>
    </div>
  );
}

const HistoryItem = ({ item, i }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <VisibilityManager
      as="li"
      key={i}
      itemType="http://schema.org/ImageObject"
      className={`${styles.history}`}
      id="history-item"
    >
      <Image
        itemProp="contentUrl"
                        className={styles.history__image + " shadow-lg " + (loaded ? styles.loaded : '')}
        src={item.img}
        alt={item.alt}
        onLoad={() => setLoaded(true)}
      />
                  <div className={styles.history__content + " shadow-lg"}>
        <h3 itemProp="name" className={styles.history__title}>
          {item.title}
        </h3>
        <p itemProp="description" className={styles.history__description}>
          {item.description}
        </p>
      </div>
    </VisibilityManager>
  );
};