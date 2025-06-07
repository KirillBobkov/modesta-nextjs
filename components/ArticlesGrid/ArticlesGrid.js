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
      className="flex flex-col items-center relative h-full p-0"
      href={item.link}
    >
      <Image
        className={`w-full max-h-[200px] object-cover self-end opacity-0 transition-all duration-700 ease-in-out ${loaded ? 'opacity-100' : ''}`}
        src={item.image}
        alt={item.title}
        onLoad={() => setLoaded(true)}
      />
      <p className="text-base leading-[25px] text-left font-bold w-full whitespace-pre-line p-5">{item.title}</p>
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
