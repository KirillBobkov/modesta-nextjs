import React, { useState } from "react";

import styles from "./Questions.module.css";
import { VisibilityManager } from "../VisibilityManager.jsx";
import containerStyles from "../../styles/container.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import { questionsContent } from "../../content/questions.js";

export const Questions = () => {
  
  return (
    <VisibilityManager
      className={`${containerStyles.container}`}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <h2 className={containerStyles.container__title} id="faq">
        {questionsContent.title}
      </h2>
      <ul>
        {questionsContent.blocks.map((q) => {
          return <Question key={q.title} title={q.title} answer={q.answer} />;
        })}
      </ul>
    </VisibilityManager>
  );
};

const Question = ({ title, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <VisibilityManager
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      as="li"
      className={styles.question}
    >
      <div
        className={`${styles.question__title} ${shadowStyles.shadow}`}
        onClick={() => setIsActive(!isActive)}
      >
        <h3 itemProp="name">{title}</h3>
        <span>{isActive ? "-" : "+"}</span>
      </div>
      {
        <p
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
          className={`${styles.question__answer} ${
            isActive ? styles["question__answer--visible"] : ""
          }`}
        >
          <span itemProp="text">{answer}</span>
        </p>
      }
    </VisibilityManager>
  );
};
