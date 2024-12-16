import React, { useState } from "react";
import styles from "./TeamBlock.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import { teamContent } from "../../content/team.js";
import { GridBlock } from "../GridBlock/GridBlock.jsx";
import Image from "next/image.js";

export const TeamBlock = () => {
  return (
    <div className={styles.fullwidth}>
    <GridBlock
      title={teamContent.title}
      id="team"
      columns={3}
      customItemStyles={{ padding: 0, background: "transparent", boxShadow: "none", overflow: "visible" }}
      content={teamContent.blocks}
      renderItem={(person, i) => {
        return <Person person={person} i={i}/>
      }}
    />
    </div>
  );
};

const Person = ({ person, i }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
    itemScope
    itemType="http://schema.org/Person"
    key={person.name}
    as="div"
    className={styles.person + ' ' + styles[`person_background_${i + 1}`]  + ' ' + (loaded ? styles.loaded : '')}
  >
    <div className={styles["person__avatar-container"]}>
      <Image
        alt="Портрет члена команды"
        className={`${styles["person__avatar"]} ${shadowStyles.shadow}`}
        src={person.image}
        width={100}
        height={100}
        onLoad={() => setLoaded(true)}
      />
    </div>
    <p className={styles["person__info"]}>
      <span itemProp="name" className={styles["person__name"]}>
        {person.name}
      </span>
      <span
        itemProp="disambiguatingDescription"
        className={styles["person__profession"]}
        style={{ display: "none", paddings: "20px" }}
      >
        {person.profession}
      </span>
      <span className={styles["person__bio"]}>{person.bio}</span>
    </p>
  </div>
  )
}