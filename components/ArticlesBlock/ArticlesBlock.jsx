import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import styles from "./ArticlesBlock.module.css";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";

import article1 from "../../public/images/article_1.jpg";
import article2 from "../../public/images/article_2.jpg";
import article3 from "../../public/images/article_3.jpg";
import article4 from "../../public/images/article_4.jpg";
import article5 from "../../public/images/article_5.jpg";
import article6 from "../../public/images/article_6.jpg";

const articles = [
  {
    link: "https://dzen.ru/modesta",
    image: article1,
    yandexGoal: "dzen-article",
    title: "Дзен",
  },
  {
    link: "https://habr.com/ru/users/MODESTA/publications/articles/",
    image: article2,
    yandexGoal: "habr-article",
    title: "Хабр",
  },
  {
    link: "https://vc.ru/u/2687396-modesta",
    image: article3,
    yandexGoal: "vc-article",
    title: "VC.ru",
  },

  {
    link: "https://pikabu.ru/@MODESTA.tech",
    image: article4,
    yandexGoal: "pikabu-article",
    title: "Пикабу",
  },
  {
    link: "https://t.me/modestatech",
    image: article5,
    yandexGoal: "telegram-article",
    title: "Telegram",
  },
  {
    link: "https://vk.com/modestatech",
    image: article6,
    yandexGoal: "vk-article",
    title: "VK",
  },
];

export function ArticlesBlock() {
  return (
    <VisibilityManager classes={containerStyles.container}>
      <h2 className={styles.articles__title} id="articles">
        Читайте нас на удобной вам площадке
      </h2>
      <p className={styles.articles__description}>
        Пишем интересные статьи, рассказываем про разработку протезов, делимся с
        вами новостями.
      </p>
      <ul className={styles.articles}>
        {articles.map((a) => {
          return (
            <VisibilityManager
              key={a.link}
              styles={{ backgroundImage: `url(${a.image.src})` }}
              side="topmax"
              as="li"
              classes={`${styles.articles__item} ${shadowStyles.shadow}`}
            >
              <a
                target="_blank"
                onClick={() => {
                  ym(96028442, "reachGoal", a.yandexGoal);
                }}
                href={a.link}
                className={styles['articles__item-text']}
              >
                {a.title}
              </a>
            </VisibilityManager>
          );
        })}
      </ul>
    </VisibilityManager>
  );
}
