import styles from "./ProductionBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import Image from "next/image.js";

import { useState } from "react";

import production1 from "../../public/images/production1.jpg";
import production2 from "../../public/images/production2.jpg";
import production3 from "../../public/images/production3.jpg";
import production4 from "../../public/images/production4.jpg";
import production5 from "../../public/images/production5.jpg";

/* Массив productionContent содержит информацию о производственном процессе конкретного продукта. В данном случает, это протезы. Массив состоит из трех элементов, каждый из которых содержит следующие данные:
img: ссылка на изображение производственного процесса
title: заголовок, описывающий изображение
description: подробное описание производственного процесса или технологии
alt: альтернативное описание изображения */

export const productionContent = [
    {
      img: production1,
      title: "Захват предметов",
      description: `Одна из главных функций, которая необходима человеку. 
      Поэтому, при разработке протеза верхних конечностей “Модеста”, нами было принято решение полностью пересмотреть концепцию понятия “протез руки”`,
      alt: "Изображение протезов",
    },
    {
      img: production2,
      title: "Надежность пользования",
      description: `То, к чему мы стремимся. Все элементы сделаны из материалов, которые позволяют увеличить срок пользования`,
      alt: "Культевая гильза",
    },
    {
      img: production3,
      title: "Современные технологические решения",
      description: `Наша технология производства заключается в изготовлении изделий с помощью 3D печати. 
      В своей лаборатории мы изготавливаем прототип устройства, отдельные узлы, проверяем их работоспособность, а уже после отправляем на промышленную печать`,
      alt: "3Д печать протеза",
    },
    {
      img: production4,
      title: "Индивидуальный подход",
      description: `В то время, как мы изготавливаем корпусные элементы, 
      вкладыш или культеприёмная гильза изготавливается нашими партнерами индивидуально под ваш размер`,
      alt: "Фото создание культеприёмной гильзы",
    },
  
    {
      img: production5,
      title: "Обслуживание",
      description: `Когда ваш протез начнёт изнашиваться, мы оперативно отправим вам расходные материалы для замены`,
      alt: "Обработка деталей протеза",
    },
  ];

export function ProductionBlock() {
  return (
    <section
      className={`${styles.production__container} ${containerStyles.container}`}
    >
      <ul>
        {productionContent.map((production, i) => (
          <Production production={production} key={i} i={i}/>
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