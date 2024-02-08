/* Объект videosContent содержит видеоматериалы по определенной теме. В данном случае - это видеоматериалы о компании и ее сотрудниках. Объект включает следующую информацию:
title: общее название для видеоматериалов
description: краткое описание видеоматериалов
videos: массив ссылок на видеофайлы */

export const videosContent = {
    title: "Оценить красоту момента помогает кино",
    description:
      "Чтобы вы могли оценить нас, снимаем разные видео-ролики о компании, о людях",
    videos: [
      {
        link: "https://www.youtube.com/embed/2A6QQnWIc_o?si=wBFMxf9fYTWeHmgb",
        thumbnailUrl: "https://i.ytimg.com/vi/2A6QQnWIc_o/sddefault.jpg",
        name: "Разработка протезов рук",
        uploadDate: new Date("December 13, 2023").toISOString(),
      },
      {
        link: "https://www.youtube.com/embed/3PvROXkoezI?si=L9emIEvrY5ZRlPIM",
        thumbnailUrl: "https://i.ytimg.com/vi/3PvROXkoezI/sddefault.jpg",
        name: "Модеста. Гараж. Часть 1",
        uploadDate: new Date("December 13, 2023").toISOString(),
      }
    ],
  };