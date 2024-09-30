import styles from "./ArticlesGrid.module.css";
import { GridBlock } from "../GridBlock/GridBlock";
import { howToGetProthesis } from "../../content/articles/howToGetProthesis";
import { typesOfProthesis } from "../../content/articles/typesOfProthesis";
import Link from "next/link";
import { phantomPain } from "../../content/articles/phantomPain";
import phantomPainImage from "../../public/images/phantomPain_2.jpg";
import typeOfProthesisImage from "../../public/images/typeOfProthesis_4.jpg";
import workingProcess8_2 from "../../public/images/working_process_2_8.jpg";

const blocks = [
  {
    title: howToGetProthesis.title,
    link: "/how-to-get-prothesis",
    image: "https://cdn.4stand.com/large/a4/6e/a46e0a7cac1b09929c941982ea41a0237f99563e.jpg"
  },
  {
    title: typesOfProthesis.title,
    link: "/types-of-prothesis",
    image: typeOfProthesisImage.src
  },
  {
    title: phantomPain.title,
    image: phantomPainImage.src,
    link: "/phantom-pain",
  },
  
];

const ArticleContent = ({ item }) => {
  return (
    <Link title="Перейти к статье" className={styles["article-grid__item"]} href={item.link}>
        <img className={styles["article-grid__img"]} src={item.image} alt={item.title} />
        <p className={styles["article-grid__title"]}>{item.title}</p>
    </Link>
  );
};

export const ArticlesGrid = () => {
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
