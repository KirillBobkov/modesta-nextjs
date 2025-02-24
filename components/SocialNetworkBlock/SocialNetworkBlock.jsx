import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import styles from "./SocialNetworkBlock.module.css";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import Image from "next/image.js";

import socialNetwork1 from "../../public/images/article_1.jpg";
import socialNetwork2 from "../../public/images/article_2.jpg";
import socialNetwork3 from "../../public/images/article_3.jpg";
import socialNetwork4 from "../../public/images/article_4.jpg";
import socialNetwork5 from "../../public/images/article_5.jpg";
import socialNetwork6 from "../../public/images/article_6.jpg";

export const socialNetworkContent = {
    title: "Читайте нас на удобной вам площадке",
    description:
      "Пишем интересные статьи, рассказываем про разработку протезов, делимся с вами новостями.",
    blocks: [
      {
        link: "https://dzen.ru/modesta",
        image: socialNetwork1,
        yandexGoal: "dzen-article",
        title: "Дзен",
      },
      {
        link: "https://habr.com/ru/users/MODESTA/publications/articles/",
        image: socialNetwork2,
        yandexGoal: "habr-article",
        title: "Хабр",
      },
      {
        link: "https://vc.ru/u/2687396-modesta",
        image: socialNetwork3,
        yandexGoal: "vc-article",
        title: "VC.ru",
      },
  
      {
        link: "https://pikabu.ru/@MODESTA.tech",
        image: socialNetwork4,
        yandexGoal: "pikabu-article",
        title: "Пикабу",
      },
      {
        link: "https://t.me/modestatech",
        image: socialNetwork5,
        yandexGoal: "telegram-article",
        title: "Telegram",
      },
      {
        link: "https://vk.com/modestatech",
        image: socialNetwork6,
        yandexGoal: "vk-article",
        title: "VK",
      },
    ],
  };
  

export function SocialNetworkBlock() {
  return (
<VisibilityManager className={containerStyles.container}>
  <div className={styles.socialNetwork__content}>
    <h2 className={containerStyles.container__title} id="social-networks">
      {socialNetworkContent.title}
    </h2>
    <p className={styles.socialNetwork__description}>{socialNetworkContent.description}</p>
  </div>
  <ul className={styles.socialNetwork}>
    {socialNetworkContent.blocks.map((a) => {
      return (
        <VisibilityManager
          key={a.link}
          as="li"
          className={`${styles.socialNetwork__item} ${shadowStyles.shadow}`}
        >
          <Image
            src={a.image.src}
            layout="fill"
            objectFit="cover"
            className={styles.socialNetwork__item_image}
          />
          <a
            target="_blank"
            onClick={() => {
              ym(96028442, "reachGoal", a.yandexGoal);
            }}
            href={a.link}
            className={styles["socialNetwork__item-text"]}
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
