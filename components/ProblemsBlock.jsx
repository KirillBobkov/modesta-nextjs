import React, { useState } from "react";
import { VisibilityManager } from "./VisibilityManager.jsx";
import Image from "next/image.js";


import problem1 from "../assets/images/problem1.jpg";
import problem2 from "../assets/images/problem2.jpg";
import problem3 from "../assets/images/problem3.jpg";
import problem4 from "../assets/images/problem4.jpg";

/* problemsContent содержит информацию о задачах, решаемых в конкретной сфере. В данном случае, это задачи, связанные с производством и использованием протезов. В объекте содержатся следующие параметры:
title: "Решаемые задачи" - общее название списка задач.
blocks: Массив объектов, каждый из которых представляет одну задачу. Каждый объект состоит из следующих данных:
img: ссылка на изображение, иллюстрирующее задачу
alt: альтернативное описание изображения
title: название задачи
description: подробное описание задачи и ее особенностей. */
export const problemsContent = {
    title: "Решаемые задачи",
    blocks: [
      {
        img: problem1,
        alt: "Фото производства",
        title: "Российское производство",
        description: `В России не хватает компаний, занимающихся производством протезов.
        Мы разрабатываем новые модели и поддерживаем отечественного производителя, стремясь к полному импортозамещению`,
      },
      {
        img: problem2,
        title: "Функциональность",
        alt: "Изображение военного с косметическим протезом",
        description: `Больше 85% продукции, приобретаемой через государственные заказы, представляют собой косметические изделия, не обладающие высокой эффективностью. 
        Наша задача - обеспечить максимальный функционал за счет сменных кистей «хватов», блокировки захвата предметов, настройки силы захвата и модуля вибротактильной обратной связи (по желанию с 18 лет)`,
      },
      {
        img: problem3,
        alt: "Фото ремонта протеза",
        title: "Своевременное обслуживание",
        description: `В условиях санкций и проблем с логистикой возникают трудности с обслуживанием импортных изделий. 
        Наше производство находится в России, вы можете рассчитывать на быстрый сервис`,
      },
      {
        img: problem4,
        title: "Помощь в освоении протеза",
        alt: "Фото реабилитации пациента",
        description: `Приобщение и приспособление к протезу требуют значительного труда и времени. 
        95% пациентов не соблюдают рекомендации специалистов.
        Вследствие чего отказываются от использования протеза. 
        Мы предоставляем программные решения для легкого освоения изделия, предлагая игровой опыт и обратную связь в реальном времени`,
      },
    ],
  };
  
export function ProblemsBlock() {
  return (
    <div className="max-w-screen-xl w-full mx-auto px-4 mb-15 md:px-10 md:mb-30">
      <VisibilityManager
        as="h2"
        className="max-w-sm text-left text-2xl leading-8 mb-5 font-bold whitespace-pre-line uppercase md:max-w-none md:text-center md:text-5xl md:leading-[60px] md:mb-7.5"
        id="problems"
      >
        {problemsContent.title}
      </VisibilityManager>
      <VisibilityManager as="ul">
        {problemsContent.blocks.map((problem, i) => {
          return <Problem key={i} problem={problem} />;
        })}
      </VisibilityManager>
    </div>
  );
}

const Problem = ({ problem }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <VisibilityManager
      as="li"
      itemType="http://schema.org/ImageObject"
      className="flex flex-col gap-[30px] mb-[30px] rounded-[30px] md:flex-row md:min-h-[400px] md:mb-10 md:gap-[2%] md:even:flex-row-reverse"
      id="problem"
    >
      <Image
        itemProp="contentUrl"
        className={`shadow-lg transition-all duration-[800ms] ease-in-out w-full h-[230px] object-cover rounded-[30px] md:w-[38%] md:h-auto ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        src={problem.img}
        alt={problem.alt}
        onLoad={() => setLoaded(true)}
      />
      <div className="shadow-lg w-full py-10 px-5 text-left bg-card rounded-[30px] flex flex-col justify-center md:w-[60%] md:p-10">
        <h3
          itemProp="name"
          className="text-[25px] leading-[32px] mb-[10px] font-bold text-left whitespace-pre-line uppercase md:mb-[15px] lg:text-[40px] lg:leading-[40px]"
        >
          {problem.title}
        </h3>
        <p
          itemProp="description"
          className="text-base leading-[25px] text-font-secondary whitespace-pre-line text-left"
        >
          {problem.description}
        </p>
      </div>
    </VisibilityManager>
  );
};
