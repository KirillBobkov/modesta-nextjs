import styles from "./ArticlesGrid.module.css";
import { GridBlock } from "../GridBlock/GridBlock";
import { howToGetProthesis } from '../../content/articles/howToGetProthesis'
import { typesOfProthesis } from '../../content/articles/typesOfProthesis'
import Link from "next/link";

const blocks = [{
  title: howToGetProthesis.title,
  link: '/how-to-get-prothesis',
}, {
  title:  typesOfProthesis.title,
  link: '/types-of-prothesis'
}];

const ArticleContent = ({ item }) => {
  return (
    <Link title="Перейти к статье" className={styles["article-grid__item"]} href={item.link}>
      <p className={styles["article-grid__title"]}>{item.title}</p>
      <div className={styles["article-grid__img"]}>
        <svg
          className={styles["article-grid__svg"]}
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M428.522,5.565H105.739C47.435,5.565,0,53,0,111.304v378.435c0,9.22,7.475,16.696,16.696,16.696h345.043
			c9.22,0,16.696-7.475,16.696-16.696V272.696h116.87c9.22,0,16.696-7.475,16.696-16.696V89.044
			C512,43.014,474.552,5.565,428.522,5.565z M345.043,89.044c0,4.849,0,365.612,0,384H33.391V111.304
			c0-39.893,32.455-72.348,72.348-72.348h256.046C351.28,52.919,345.043,70.265,345.043,89.044z M478.609,239.304H378.435
			c0-12.078,0-21.309,0-33.432h48.923c9.22,0,16.696-7.475,16.696-16.696s-7.475-16.696-16.696-16.696h-48.923v-33.391h48.923
			c9.22,0,16.696-7.475,16.696-16.696s-7.475-16.696-16.696-16.696h-48.923V89.044c0-27.618,22.469-50.087,50.087-50.087
			s50.087,22.469,50.087,50.087V239.304z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M150.261,105.739H83.478c-9.22,0-16.696,7.475-16.696,16.696V256c0,9.22,7.475,16.696,16.696,16.696h66.783
			c9.22,0,16.696-7.475,16.696-16.696V122.435C166.957,113.214,159.481,105.739,150.261,105.739z M133.565,239.304h-33.391V139.13
			h33.391V239.304z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M294.957,306.087h-77.913c-9.22,0-16.696,7.475-16.696,16.696v100.174c0,9.22,7.475,16.696,16.696,16.696h77.913
			c9.22,0,16.696-7.475,16.696-16.696V322.783C311.652,313.562,304.177,306.087,294.957,306.087z M278.261,406.261h-44.522v-66.783
			h44.522V406.261z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M294.957,105.739h-77.913c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696h77.913
			c9.22,0,16.696-7.475,16.696-16.696C311.652,113.214,304.177,105.739,294.957,105.739z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M294.957,172.522h-77.913c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h77.913
			c9.22,0,16.696-7.475,16.696-16.696S304.177,172.522,294.957,172.522z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M150.261,339.478H83.478c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696h66.783
			c9.22,0,16.696-7.475,16.696-16.696C166.957,346.953,159.481,339.478,150.261,339.478z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M150.261,406.261H83.478c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696h66.783
			c9.22,0,16.696-7.475,16.696-16.696C166.957,413.736,159.481,406.261,150.261,406.261z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M294.957,239.304h-77.913c-9.22,0-16.696,7.475-16.696,16.696c0,9.22,7.475,16.696,16.696,16.696h77.913
			c9.22,0,16.696-7.475,16.696-16.696C311.652,246.78,304.177,239.304,294.957,239.304z"
              />
            </g>
          </g>
        </svg>
      </div>
    </Link>
  );
};

export const ArticlesGrid = () => {
  return (
    <GridBlock
      title={"Полезные статьи"}
      description={"Эти материалы мы написали для вас"}
      id="articles"
      columns={2}
      clickable
      content={blocks}
      renderItem={(item) => <ArticleContent item={item} />}
    />
  );
};