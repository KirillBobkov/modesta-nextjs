import advantage_1 from "../public/images/advantage_1.webp";
import advantage_1_mobile from "../public/images/advantage_1_mobile.webp";
import advantage_2 from "../public/images/advantage_2.webp";
import advantage_2_mobile from "../public/images/advantage_2_mobile.webp";
import advantage_3 from "../public/images/advantage_3.webp";
import advantage_3_mobile from "../public/images/advantage_3_mobile.webp";

/* В данном объекте находятся следующие поля:
title: “Наши преимущества” - общее название преимуществ.
blocks: массив объектов, каждый из которых представляет отдельное преимущество. Каждый объект содержит следующую информацию:
title: название преимущества, например “Эффективность”.
description: описание преимущества, в данном случае - “Роботизированный захват…”
mobileImg и desktopImg: ссылки на изображения, связанные с данным преимуществом (для мобильной и десктопной версии соответственно).
right: логическое значение, указывающее на расположение изображения на странице (если true - изображение будет справа от текста, если false - слева). */

export const advantagesContent = {
    title: "Наши преимущества",
    blocks: [
      {
        title: "Эффективность",
        description:
          "Роботизированный захват, обеспечивающий возможность управлять объектами разнообразных форм",
        mobileImg: advantage_1_mobile.src,
        desktopImg: advantage_1.src,
        right: false,
      },
      {
        title: "Сменные конечности",
        description:
          "Удобство в использовании в различных местах: на улице, дома или в мастерской",
        mobileImg: advantage_2_mobile.src,
        desktopImg: advantage_2.src,
        right: true,
      },
      {
        title: "Простое обслуживание",
        description:
          "Произвести ремонт можно самостоятельно либо через наш сервис оперативного устранения неполадок",
        mobileImg: advantage_3_mobile.src,
        desktopImg: advantage_3.src,
        right: false,
      },
    ],
  };