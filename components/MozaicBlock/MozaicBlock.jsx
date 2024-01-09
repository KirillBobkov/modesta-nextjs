import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";
import styles from "./MozaicBlock.module.css";
import Image from "next/image.js";

export const MozaicBlock = React.memo(({ images }) => {

const itemClass = (a) => `mozaic__item--${a + 1}`;
  return (
    <VisibilityManager as="ul" classes={styles.mozaic}>
      {images.map((img, i) => {
        return (
          <li
            key={i}
            className={`${styles.mozaic__item} ${
              styles[itemClass(i)]
            }`}
          >
            <Image alt={`Элемент мойзайки №${i}`} priority className={styles.mozaic__image} key={i} src={img} />
          </li>
        );
      })}
    </VisibilityManager>
  );
});
