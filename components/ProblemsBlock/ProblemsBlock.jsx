import React, { useState } from "react";
import styles from "./ProblemsBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import Image from "next/image.js";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import problem1 from "../../public/images/problem1.jpg";
import problem2 from "../../public/images/problem2.jpg";
import problem3 from "../../public/images/problem3.jpg";
import problem4 from "../../public/images/problem4.jpg";

/* problemsContent содержит информацию о задачах, решаемых в конкретной сфере. В данном случае, это задачи, связанные с производством и использованием протезов. В объекте содержатся следующие параметры:
title: “Решаемые задачи” - общее название списка задач.
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
    <div className={containerStyles.container}>
      <VisibilityManager
        as="h2"
        className={containerStyles.container__title}
        id="problems"
      >
        {problemsContent.title}
      </VisibilityManager>
      <VisibilityManager as="ul">
        {problemsContent.blocks.map((problem, i) => {
          return <Problem key={i} problem={problem} i={i} />;
        })}
      </VisibilityManager>
    </div>
  );
}

const Problem = ({ problem, i }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <VisibilityManager
      as="li"
      key={i}
      itemType="http://schema.org/ImageObject"
      className={`${styles.problem}`}
      id="problem"
    >
      <Image
        itemProp="contentUrl"
        className={styles.problem__image + " " + shadowStyles.shadow  + ' ' + (loaded ? styles.loaded : '')}
        src={problem.img}
        alt={problem.alt}
        onLoad={() => setLoaded(true)}
      />
      <div className={styles.problem__content + " " + shadowStyles.shadow}>
        <h3 itemProp="name" className={styles.problem__title}>
          {problem.title}
        </h3>
        <p itemProp="description" className={styles.problem__description}>
          {problem.description}
        </p>
      </div>
    </VisibilityManager>
  );
};
