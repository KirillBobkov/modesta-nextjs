import styles from "./ArticlesGrid.module.css";
import { GridBlock } from "../GridBlock/GridBlock";
import { howToGetProthesis } from "../../content/articles/howToGetProthesis";
import { typesOfProthesis } from "../../content/articles/typesOfProthesis";
import Link from "next/link";
import { phantomPain } from "../../content/articles/phantomPain";
import phantomPainImage from "../../assets/images/phantomPain_2.jpg";
import typeOfProthesisImage4 from "../../assets/images/typeOfProthesis_4.jpg";
import getProthesisImage from "../../assets/images/getProthesisImage.jpg";
import Image from "next/image";
import { useState } from "react";

const blocks = [
  {
    title: howToGetProthesis.title,
    link: "/how-to-get-prothesis",
    image: getProthesisImage,
  },
  {
    title: typesOfProthesis.title,
    link: "/types-of-prothesis",
    image: typeOfProthesisImage4,
  },
  {
    title: phantomPain.title,
    image: phantomPainImage,
    link: "/phantom-pain",
  },
];

const ArticleContent = ({ item }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      title="Перейти к статье"
      className={styles["article-grid__item"]}
      href={item.link}
    >
      <Image
        className={styles["article-grid__img"]  + ' ' + (loaded ? styles.loaded : '')}
        src={item.image}
        alt={item.title}
        onLoad={() => setLoaded(true)}
      />
      <p className={styles["article-grid__title"]}>{item.title}</p>
    </Link>
  );
};

export const  ArticlesGrid = () => {
  return (
    <GridBlock
      title={"Полезные статьи"}
      description={"Эти материалы мы написали для вас"}
      id="articles"
      columns={3}
      clickable
      content={blocks}
      customItemStyles={{ padding: "0" }}
      renderItem={(item) => <ArticleContent item={item} />}
    />
  );
};
