import React, { useState } from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";
import styles from "./MozaicBlock.module.css";
import Image from "next/image.js";

export const MozaicBlock = React.memo(({ images }) => {
  const [openedImageIndex, setOpenedImageIndex] = useState(undefined);
  const handleFullScreenOpen = (i) => {
    setOpenedImageIndex(i);
    document.documentElement.classList.add("mobile-menu-opened");
  };

  return (
    <ul className={styles.mozaic}>
      {images.map((img, i) => {
        return (
          <li key={i} className={`${styles.mozaic__item} ${styles[`mozaic__item--${i + 1}`]}`}>
            <div
              className={`${styles["mozaic__image-container"]} ${i === openedImageIndex ? styles["mozaic__image-container--opened"] : ""}`}
              onClick={() => {
                if (i === openedImageIndex) {
                  document.documentElement.classList.remove("mobile-menu-opened");
                  setOpenedImageIndex(undefined);
                }
              }}
            >
              <Image
                onClick={() => handleFullScreenOpen(i)}
                priority
                className={styles.mozaic__image}
                key={i}
                src={img}
                alt={`Элемент мозайки №${i}`}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
});
