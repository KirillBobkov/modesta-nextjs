import socialNetwork1 from "../public/images/article_1.jpg";
import socialNetwork2 from "../public/images/article_2.jpg";
import socialNetwork3 from "../public/images/article_3.jpg";
import socialNetwork4 from "../public/images/article_4.jpg";
import socialNetwork5 from "../public/images/article_5.jpg";
import socialNetwork6 from "../public/images/article_6.jpg";

/* articlesContent содержит информацию о каналах, где можно прочитать статьи о конкретной теме или продукте. В данном объекте содержатся следующие поля:
title: “Читайте нас” - общее название каналов со статьями.
description: Текст с описанием того, какие статьи публикуются на этих каналах.
blocks: массив объектов, представляющих отдельные каналы со статьями. Каждый такой объект содержит следующую информацию:
link: ссылка на канал (например, сайт или блог)
image: ссылка на изображение, представляющее канал
yandexGoal: цель в Яндекс.Метрике, которая будет достигнута при нажатии на ссылку
title: название канала (например, “Дзен”) */

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
  