import React from "react";
import { VisibilityManager } from "../VisibilityManager.jsx";

import styles from "./TeamBlock.module.css";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import { teamContent } from "../../content/team.js";

export function TeamBlock() {
  return (
    <VisibilityManager className={containerStyles.container}>
      <h2
        className={`${containerStyles.container__title} ${styles['team-title']}`}
        id="team"
      >
        {teamContent.title}
      </h2>
      <ul className={styles.team}>
        {teamContent.blocks.map((person) => {
          return (
            <VisibilityManager itemScope itemType="http://schema.org/Person" key={person.name} as="li" className={styles.person}>
              <div className={styles['person__avatar-container']}>
                <img
                  alt="Портрет члена команды"
                  className={`${styles['person__avatar']} ${shadowStyles.shadow}`}
                  src={person.image}
                />
              </div>
              <p className={styles['person__info']}>
                <span itemProp="name" className={styles['person__name']}>{person.name}</span>
                <span itemProp="disambiguatingDescription" className={styles['person__profession']}>{person.profession}</span>
                <span className={styles['person__bio']}>{person.bio}</span>
              </p>
            </VisibilityManager>
          );
        })}
      </ul>
    </VisibilityManager>
  );
}
