import { VisibilityManager } from "./VisibilityManager.jsx";

import Image from "next/image.js";

import { useState } from "react";

import production1 from "../assets/images/production1.jpg";
import production2 from "../assets/images/production2.jpg";
import production3 from "../assets/images/production3.jpg";
import production4 from "../assets/images/production4.jpg";
import production5 from "../assets/images/production5.jpg";

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
      Поэтому, при разработке протеза верхних конечностей "Модеста", нами было принято решение полностью пересмотреть концепцию понятия "протез руки"`,
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
      className={`mt-10 max-w-screen-xl w-full mx-auto px-4 mb-15 md:px-10 md:mb-30 md:mt-0`}
    >
      <ul>
        {productionContent.map((production, i) => (
          <Production production={production} key={i} i={i} />
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
      className="mb-[30px] flex flex-col gap-[30px] rounded-[30px] md:flex-1 md:flex-row md:gap-[2%] md:mb-10 even:md:flex-row-reverse"
      id="production"
    >
      <Image
        itemProp="contentUrl"
        className={`h-[230px] w-full rounded-[30px] object-cover shadow-lg transition-all duration-800 ease-in-out md:h-auto md:w-[38%] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        src={production.img}
        alt={production.alt}
        onLoad={() => setLoaded(true)}
      />

      <div className="flex w-full flex-col justify-center rounded-[30px] bg-[var(--card-bg-color)] p-10 px-5 text-left shadow-lg md:w-[60%] md:p-10">
        <h3
          itemProp="name"
          className="mb-[10px] whitespace-pre-line text-[25px] font-bold uppercase leading-[32px] max-w-[350px] md:max-w-none lg:mb-[15px] lg:text-[40px] lg:leading-[40px]"
        >
          {production.title}
        </h3>
        <p
          itemProp="description"
          className="whitespace-pre-line text-base leading-[25px] text-[var(--secondary-font-color)]"
        >
          {production.description}
        </p>
      </div>
    </VisibilityManager>
  );
};