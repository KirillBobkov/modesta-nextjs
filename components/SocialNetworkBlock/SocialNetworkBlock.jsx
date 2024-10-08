import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import styles from "./SocialNetworkBlock.module.css";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import { socialNetworkContent } from "../../content/socialNetwork.js";
import Image from "next/image.js";

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
