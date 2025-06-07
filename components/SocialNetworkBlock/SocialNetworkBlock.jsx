import React from "react";
import Image from "next/image.js";
import { VisibilityManager } from "../VisibilityManager.jsx";

import socialNetwork1 from "../../assets/images/article_1.jpg";
import socialNetwork2 from "../../assets/images/article_2.jpg";
import socialNetwork3 from "../../assets/images/article_3.jpg";
import socialNetwork4 from "../../assets/images/article_4.jpg";
import socialNetwork5 from "../../assets/images/article_5.jpg";
import socialNetwork6 from "../../assets/images/article_6.jpg";

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
    <VisibilityManager className="max-w-7xl w-full mx-auto px-4 md:px-10 mb-16 md:mb-32">
      <div className="mb-5 md:mb-10">
        <h2
          className="text-left md:text-center text-2xl md:text-5xl leading-8 md:leading-[60px] mb-5 md:mb-8 font-bold whitespace-pre-line uppercase"
          id="social-networks"
        >
          {socialNetworkContent.title}
        </h2>
        <p className="text-left md:text-center w-full md:w-1/2 mx-auto text-secondary-font-color whitespace-pre-line">
          {socialNetworkContent.description}
        </p>
      </div>
      <ul className="flex flex-wrap justify-center gap-y-[30px] gap-x-[4%] md:gap-x-[2%]">
        {socialNetworkContent.blocks.map((a) => {
          return (
            <VisibilityManager
              key={a.link}
              as="li"
              className="group relative w-[48%] md:w-[32%] rounded-[30px] overflow-hidden bg-card-bg-color flex items-stretch justify-center cursor-pointer shadow-[0_6px_20px_0px_rgba(0,0,0,0.20)]"
            >
              <Image
                src={a.image.src}
                layout="fill"
                objectFit="cover"
                className="-z-10 object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
              />
              <a
                target="_blank"
                onClick={() => {
                  ym(96028442, "reachGoal", a.yandexGoal);
                }}
                href={a.link}
                className="w-full h-[120px] md:h-[150px] flex items-center justify-center text-white text-center bg-black/60 text-[25px] md:text-[40px] font-bold transition-all duration-200 ease-in-out group-hover:bg-black/40"
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
