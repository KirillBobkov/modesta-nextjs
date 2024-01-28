import React from "react";
import problem1 from "../../public/images/problem1.jpg";
import problem2 from "../../public/images/problem2.jpg";
import problem3 from "../../public/images/problem3.jpg";
import problem4 from "../../public/images/problem4.jpg";
import styles from "./ProblemsBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import Image from "next/image.js";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";

export function ProblemsBlock() {
  return (
    <>
      <VisibilityManager
        as="h2"
        classes={containerStyles.container__title}
        id="problems"
      >
        Решаемые задачи
      </VisibilityManager>
      <VisibilityManager
        itemScope
        itemType="http://schema.org/ImageObject"
        as="ul"
        classes={containerStyles.container}
      >
        <VisibilityManager
          as="li"
          classes={`${styles.problem} ${shadowStyles.shadow}`}
          id="problem"
        >
          <Image
            priority
            itemProp="contentUrl"
            className={styles.problem__image}
            src={problem1}
            alt="Фото производства"
          />
          <div className={styles.problem__content}>
            <h3 itemProp="name" className={styles.problem__title}>
              Российское производство{" "}
            </h3>
            <p itemProp="description" className={styles.problem__description}>
              В России не хватает компаний, занимающихся производством протезов.
              Мы разрабатываем новые модели и поддерживаем отечественного
              производителя, стремясь к полному импортозамещению
            </p>
          </div>
        </VisibilityManager>
        <VisibilityManager
          itemScope
          itemType="http://schema.org/ImageObject"
          as="li"
          classes={`${styles.problem} ${shadowStyles.shadow}`}
        >
          <Image
            priority
            itemProp="contentUrl"
            className={styles.problem__image}
            src={problem2}
            alt="Изображение военного с косметическим протезом"
          />
          <div className={styles.problem__content}>
            <h3 itemProp="name" className={styles.problem__title}>
              Функциональность
            </h3>
            <p itemProp="description" className={styles.problem__description}>
              Больше 85% продукции, приобретаемой через государственные заказы,
              представляют собой косметические изделия, не обладающие высокой
              эффективностью. Наша задача - обеспечить максимальный функционал
              за счет сменных кистей «хватов», блокировки захвата предметов,
              настройки силы захвата и модуля вибротактильной обратной связи (по
              желанию с 18 лет)
            </p>
          </div>
        </VisibilityManager>
        <VisibilityManager
          itemScope
          itemType="http://schema.org/ImageObject"
          as="li"
          classes={`${styles.problem} ${shadowStyles.shadow}`}
        >
          <Image
            priority
            itemProp="contentUrl"
            className={styles.problem__image}
            src={problem3}
            alt="Фото ремонта протеза"
          />
          <div className={styles.problem__content}>
            <h3 itemProp="name" className={styles.problem__title}>
              Своевременно обслуживаем
            </h3>
            <p itemProp="description" className={styles.problem__description}>
              В условиях санкций и проблем с логистикой возникают трудности с
              обслуживанием импортных изделий. Наше производство находится в
              России, вы можете рассчитывать на быстрый сервис
            </p>
          </div>
        </VisibilityManager>
        <VisibilityManager
          itemScope
          itemType="http://schema.org/ImageObject"
          as="li"
          classes={`${styles.problem} ${shadowStyles.shadow}`}
        >
          <Image
            priority
            itemProp="contentUrl"
            className={styles.problem__image}
            src={problem4}
            alt="Фото реабилитации пациента"
          />
          <div className={styles.problem__content}>
            <h3 itemProp="name" className={styles.problem__title}>
              Помощь в освоении протеза
            </h3>
            <p itemProp="description" className={styles.problem__description}>
              Приобщение и приспособление к протезу требуют значительного труда
              и времени. 95% пациентов не соблюдают рекомендации специалистов.
              Вследствие чего отказываются от использования протеза. Мы
              предоставляем программные решения для легкого освоения изделия,
              предлагая игровой опыт и обратную связь в реальном времени
            </p>
          </div>
        </VisibilityManager>
      </VisibilityManager>
    </>
  );
}
