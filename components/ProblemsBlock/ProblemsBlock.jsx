import React from "react";
import styles from "./ProblemsBlock.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import Image from "next/image.js";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import { problemsContent } from "../../content/problems.js";

export function ProblemsBlock() {
  return (
    <div className={containerStyles.container}>
      <VisibilityManager
        as="h2"
        className={containerStyles.container__title}
        id="problems"
      >
        {problemsContent.title}
      </VisibilityManager>
      <VisibilityManager as="ul">
        {problemsContent.blocks.map((problem, i) => {
          return (
            <VisibilityManager
              as="li"
              key={i}
              itemType="http://schema.org/ImageObject"
              className={`${styles.problem}`}
              id="problem"
            >
              <Image
                itemProp="contentUrl"
                className={styles.problem__image + ' ' + shadowStyles.shadow}
                src={problem.img}
                alt={problem.alt}
              />
              <div className={styles.problem__content + ' ' + shadowStyles.shadow}>
                <h3 itemProp="name" className={styles.problem__title}>
                  {problem.title}
                </h3>
                <p
                  itemProp="description"
                  className={styles.problem__description}
                >
                  {problem.description}
                </p>
              </div>
            </VisibilityManager>
          );
        })}
      </VisibilityManager>
    </div>
  );
}
