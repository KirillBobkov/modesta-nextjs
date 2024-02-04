import roadmap_period1 from "../public/images/roadmap1.jpg";
import roadmap_period2 from "../public/images/roadmap2.jpg";
import roadmap_period3 from "../public/images/roadmap3.jpg";
import roadmap_period4 from "../public/images/roadmap4.jpg";
import roadmap_period5 from "../public/images/roadmap5.jpg";

/* объект roadmapContent содержит дорожную карту или план действий по развитию определенного продукта. 
В этом случае, продукт связан с разработкой протезов. Объект содержит следующую информацию:
title: общий заголовок для всей дорожной карты
blocks: массив объектов, каждый из которых представляет определенный этап или период в дорожной карте. Каждый объект содержит следующую информацию:
title: название этапа или периода
description: подробное описание действий, запланированных на этот этап
image: ссылка на изображение, представляющее этот этап */

export const roadmapContent = {
    title: "Дорожная карта",
    blocks: [
      {
        title: "III квартал 2021",
        description:
          "Формирование концепции прототипов, а также проектирование пилотных версий изделий",
        image: roadmap_period1,
      },
      {
        title: "I квартал 2022",
        description:
          'Старт проекта “Протез для Ксюши". Создание первого антропоморфного образца',
        image: roadmap_period2,
      },
      {
        title: "IV квартал 2022",
        description:
          "Подготовка и выступление на “Телемедфоруме 2022” с готовыми прототипами",
        image: roadmap_period3,
      },
      {
        title: "I квартал 2023",
        description:
          "Поиск эффективного вида захватного устройства. Пересмотр концепции протеза руки",
        image: roadmap_period4,
      },
      {
        title: "III квартал 2023",
        description:
          "Получение статуса резидента ИЦ “Сколково” в кластере Биомед",
        image: roadmap_period5,
      },
    ],
  };