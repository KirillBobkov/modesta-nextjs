

import styles from "./AdvantagesBlock.module.css";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import Image from "next/image.js";
import { advantagesContent } from '../../content/advantages.js';
import { useState } from "react";

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
      onLoad={() => setLoaded(true)}
    />
  )}
</VisibilityManager> )

}