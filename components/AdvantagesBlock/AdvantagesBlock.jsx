

import styles from "./AdvantagesBlock.module.css";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import Image from "next/image.js";
import { useState } from "react";
import advantage_1 from "../../public/images/advantage_1.webp";
import advantage_2 from "../../public/images/advantage_2.webp";
import advantage_3 from "../../public/images/advantage_3.webp";

export const advantagesContent = {
  title: "Наши преимущества",
  blocks: [
    {
      title: "Эффективность",
      description:
        "Роботизированный захват, обеспечивающий возможность управлять объектами разнообразных форм",
      desktopImg: advantage_1.src,
      right: false,
    },
    {
      title: "Сменные конечности",
      description:
        "Удобство в использовании в различных местах: на улице, дома или в мастерской",
      desktopImg: advantage_2.src,
      right: true,
    },
    {
      title: "Простое обслуживание",
      description:
        "Произвести ремонт можно самостоятельно либо через наш сервис оперативного устранения неполадок",
      desktopImg: advantage_3.src,
      right: false,
    },
  ],
};

export function AdvantagesBlock() {

  return (
    <VisibilityManager className={containerStyles.container}>
      <h2 className={containerStyles.container__title} id="advantages">
        {advantagesContent.title}
      </h2>
      <ul className={styles["advantages"]}>
        {advantagesContent.blocks.map((adv, i) => {
          return (
            <Item key={i} adv={adv} i={i} />
          );
        })}
      </ul>
    </VisibilityManager>
  );
}

const Item = ({ adv, i }) => {
  const [loaded, setLoaded] = useState(false);

return (<VisibilityManager
  itemScope
  itemType="http://schema.org/ImageObject"
  as="li"
  key={i}
  className={`${styles["advantages__item"]} ${
    adv.right ? styles["advantages__item--right"] : ""
  } ${shadowStyles.shadow}`}
>
  <div className={styles["advantages__content"]}>
    <h3 itemProp="name" className={styles["advantages__item-text"]}>
      {adv.title}
    </h3>
    <p className={styles["advantages__item-description"]}>
      {adv.description}
    </p>
  </div>
  {(
    <Image         
      itemProp="contentUrl"
      className={styles["advantage__item-image"] + ' ' + (loaded ? styles.loaded : '')}
      src={adv.desktopImg}
      alt={`Изображение протеза #${i}`}
      fill
      priority
      onLoad={() => setLoaded(true)}
    />
  )}
</VisibilityManager> )

}