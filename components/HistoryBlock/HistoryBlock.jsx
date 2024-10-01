import React from "react";
import styles from "./HistoryBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import containerStyles from "../../styles/container.module.css";
import tech_background_white from "../../public/images/tech_background_white.webp";
import tech_background_black from "../../public/images/tech_background_black.webp";
import tech_background_white_mobile from "../../public/images/tech_background_white_mobile.webp";
import tech_background_black_mobile from "../../public/images/tech_background_black_mobile.webp";
import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";
import { useTheme } from "../../hooks/useTheme.jsx";
import Image from "next/image.js";
export function HistoryBlock({ title, description }) {
  const { theme } = useTheme();
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);
  
  return (
    <section
      className={`${styles.history} ${containerStyles.container} ${containerStyles['container--full-width']}`} id="history"
    >
      <Image
        src={
          theme === "light"
            ? isMobile
              ? tech_background_white_mobile.src
              : tech_background_white.src
            : isMobile
            ? tech_background_black_mobile.src
            : tech_background_black.src
        }
        layout="fill"
        objectFit="cover"
        alt="Background image"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      />
      <VisibilityManager as="div" className={`${styles.history__content}`}>
        {title ? <h2 className={containerStyles.container__title}>{title}</h2> : null}
        <p className={styles["history__description"]}>
          {description}
        </p>
      </VisibilityManager>
    </section>
  );
}