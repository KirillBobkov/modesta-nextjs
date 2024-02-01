import React, { useState } from "react";
import styles from "./BooksBlock.module.css";
import shadowStyles from "../../styles/shadow.module.css";
import { GridBlock } from "../GridBlock/GridBlock";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const booksContent = [
  {
    name: "Прикладная электрофизиология",
    description:
      "Полезна для тех кому интересно получить базовое понимание как работает биоэлектрический протез. Важно отметить наличие экспериментов и лабораторных работ, которые может повторить практически каждый.",
    link: "https://ntcontest.ru/upload/iblock/b9b/b9b6120243ba5603f9ccc71b60b87c77.pdf",
  },

  {
    name: "“Ампутации конечностей и протезы” Н. Н. Приоров (1941 год)",
    description:
      "Описанные знания о ампутации и последующего протезирования актуальны по сегодняшний день. Данную работу можно считать классикой презостроения.",
    link: "https://www.booksite.ru/fulltext/174869/text.pdf",
  },
  {
    name: "Погружение в мир электрофизиологии",
    description:
      "Подробное описания работы механизмов мышечного сокращения, с лабораторными работами.",
    link: "https://kpfu.ru/staff_files/F_832641285/glava_2_sinaps_i_myshca__2_.pdf",
  },
  {
    name: "“Вот они – роботы” А. Е. Кабринский (1972 год)",
    description:
      "Описание некого симбиоза человека и робота, который рождает такие продукты как современные биоэлектрические протезы.",
    link: "https://sheba.spb.ru/za/vot-roboty-1972.htm",
  },

  {
    name: "“Антропология киборга – Антон Круглов” (2023 год)",
    description:
      "Работа Антона Круглова заслуживающая внимания, полезный труд, знания которого можно брать и применять сразу после прочтения. Уделяется часть книги психологическому аспекту, техническим моментам и примерам пациентов.",
    link: "https://static.insales-cdn.com/files/1/7512/26582360/original/antropologia_kiborga_sod_i_primeri_str_compressed.pdf",
  },
  {
    name: "“DESIGN OF AN EXTERNALLY POWERED ARTIFICIAL ELBOW FOR ELECTROMYOGRAPHIC CONTROL” (1965 год)",
    description:
      "Описание разработки протеза локтя с управлением при помощи электромиографии. В документе приложены принципиальные электрические схемы, чертежи элементов протеза.",
    link: "https://dspace.mit.edu/bitstream/handle/1721.1/150524/25500791-MIT.pdf",
  },
  {
    name: "“Рука Юты” – S.C. Jacobsen R.B. Jerard ",
    description:
      "Оригинальная статья с подробным математическим описанием принципа работы. Полезно для начинающих протезостроителей.",
    link: "https://dl.acm.org/doi/pdf/10.1145/800182.810395",
  },

  {
    name: "“BIOELECTRIC CONTROL OF PROSTHESES” (1966 год)",
    description:
      "Cтроение протеза методом управления от датчиков ЭМГ. Способы управления таким протезом. Возможность получать обратную связь от протеза. Перспективы развития протезов в будущем",
    link: "https://dspace.mit.edu/bitstream/handle/1721.1/4297/RLE-TR-446-04743378.pdf",
  },

  {
    name: "“Making Hands: A History of Prosthetic Arms” (1919 год)",
    description: "Первая в мире книга, руководство по протезированию.",
    link: "https://books.google.ru/books?id=EID-DwAAQBAJ&pg=PA147&lpg=PA147&dq=Peter+Kyberd+Making+Hands+free&source=bl&ots=HPErdUUTNm&sig=ACfU3U2ql7dWWOWYaeXTmEY4LNm_3-NQHA&hl=ru&sa=X&ved=2ahUKEwiU_IT7r8mDAxX1PxAIHXdXCnw4UBDoAXoECAIQAw#v=onepage&q&f=false",
  },
];

const BookContent = ({ item }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);

  const handlers = isMobile
    ? {
        onClick: (e) => {
          e?.preventDefault();
          setTooltipVisible(!tooltipVisible);
        },
      }
    : {
        onMouseEnter: () => {
          setTooltipVisible(true);
        },
        onMouseLeave: () => {
          setTooltipVisible(false);
        },
      };

  return (
    <a
      target="_blank"
      className={styles["books__item-wrapper"]}
      href={item.link}
    >
      <p className={styles["books__item-info"]}>
        <span
          itemProp="disambiguatingDescription"
          className={styles["books__item-name"]}
        >
          {item.name}
        </span>
        <p
          className={`${styles["books__item-description"]} ${
            tooltipVisible ? styles["books__item-description--visible"] : ""
          }`}
        >
          {item.description}
        </p>
      </p>
      <div className={styles.books__img} {...handlers}>
        {!tooltipVisible ? (
          <svg
            className={styles.books__svg}
            viewBox="0 0 128 128"
            enableBackground="new 0 0 128 128"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M64,0C28.656,0,0,28.656,0,64s28.656,64,64,64s64-28.656,64-64S99.344,0,64,0z M64,120C33.125,120,8,94.875,8,64
			S33.125,8,64,8s56,25.125,56,56S94.875,120,64,120z M64,48c-4.414,0-8,3.586-8,8v40c0,4.414,3.586,8,8,8s8-3.586,8-8V56
			C72,51.586,68.414,48,64,48z M64,24c-4.414,0-8,3.586-8,8s3.586,8,8,8s8-3.586,8-8S68.414,24,64,24z"
                />
              </g>
            </g>
          </svg>
        ) : (
          <svg
            className={styles.books__svg}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m12 22c5.5228475 0 10-4.4771525 10-10s-4.4771525-10-10-10-10 4.4771525-10 10 4.4771525 10 10 10zm0 2c-6.627417 0-12-5.372583-12-12s5.372583-12 12-12 12 5.372583 12 12-5.372583 12-12 12z" />
              <path d="m9.20710678 16.2071068c-.39052429.3905243-1.02368927.3905243-1.41421356 0s-.39052429-1.0236893 0-1.4142136l6.99999998-6.99999998c.3905243-.39052429 1.0236893-.39052429 1.4142136 0s.3905243 1.02368927 0 1.41421356z" />
              <path d="m7.79289322 9.20710678c-.39052429-.39052429-.39052429-1.02368927 0-1.41421356s1.02368927-.39052429 1.41421356 0l7.00000002 6.99999998c.3905243.3905243.3905243 1.0236893 0 1.4142136s-1.0236893.3905243-1.4142136 0z" />
            </g>
          </svg>
        )}
      </div>
    </a>
  );
};

export const BooksBlock = () => {
  return (
    <GridBlock
      title="Библиотека"
      id="books"
      clickable
      description={
        "Мы собрали для вас полезные материалы о протезировании, доступные для скачивания"
      }
      content={booksContent}
      renderItem={(item) => <BookContent item={item} />}
    />
  );
};
