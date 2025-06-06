import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

import { useTheme } from "../hooks/useTheme";
import shadowStyles from "../styles/shadow.module.css";
import containerStyles from "../styles/container.module.css";
import styles404 from "../styles/404.module.css";
import Link from "next/link";

export default function NotFound() {
  useEffect(() => {
    document.documentElement.classList.add("no-scroll-page");

    return () => document.documentElement.classList.remove("no-scroll-page");
  }, []);

  const [popupOpened, setOpened] = useState(false);
  useTheme();

  const metaConfig = {
    seoContent: `Страница не найдена - ошибка 404

Перейдите на главную страницу Модеста, чтобы:
✓ Узнать о современных протезах
✓ Изучить технологии протезирования
✓ Получить консультацию специалиста
✓ Найти нужную информацию

#модеста #протезирование #инновации #медицина`,
    title: "404 - Страница не существует | Модеста",
    description: "К сожалению, запрашиваемая страница не найдена. Модеста - ведущий производитель инновационных протезов верхних конечностей в России.",
    keywords: "404, страница не найдена, протезы рук, модеста, инновационные протезы, протезирование конечностей",
  };

  return (
        <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
    <section className={styles404["not-found"]}>
      <h1
        className={`${containerStyles.container__title} ${styles404["not-found__title"]} `}
      >
        404
      </h1>
      <p className={styles404["not-found__description"]}>
        Такой страницы не существует. Возможно, ссылка по которой вы перешли —
        неправильная.
      </p>
      <Link
        prefetch={false}
        href={"/"}
        className={`${styles404["not-found-button"]} ${shadowStyles.shadow}`}
        id="not-found"
      >
        <svg
          className={styles404.svg}
          height="25px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 294.997 294.997"
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M286.36,98.016c-13.223-37.091-40.098-66.813-75.675-83.691C175.109-2.554,135.088-4.567,97.997,8.656
		C60.906,21.879,31.183,48.754,14.305,84.331C-2.572,119.908-4.585,159.928,8.637,197.02c1.113,3.122,4.547,4.748,7.667,3.637
		c3.122-1.113,4.75-4.545,3.637-7.667C7.794,158.918,9.643,122.155,25.147,89.474s42.807-57.369,76.879-69.515
		c34.072-12.146,70.836-10.296,103.516,5.207c32.682,15.504,57.369,42.807,69.516,76.879c12.146,34.072,10.297,70.835-5.207,103.516
		s-42.807,57.369-76.879,69.515c-38.189,13.613-80.082,9.493-114.935-11.304c-2.848-1.699-6.529-0.768-8.227,2.078
		c-1.698,2.846-0.768,6.529,2.078,8.227c23.207,13.848,49.276,20.903,75.541,20.902c16.674,0,33.43-2.845,49.572-8.599
		c37.092-13.223,66.813-40.098,83.691-75.675C297.57,175.127,299.583,135.107,286.36,98.016z"
            />
            <path
              d="M213.499,147.518c0-3.313-2.687-6-6-6H58.069c-3.314,0-6,2.687-6,6s2.686,6,6,6h149.43
		C210.812,153.518,213.499,150.831,213.499,147.518z"
            />
            <path
              d="M165.686,210.275c-2.344,2.343-2.344,6.142,0,8.485c1.171,1.171,2.707,1.757,4.242,1.757s3.071-0.586,4.242-1.757l67-67
		c2.344-2.343,2.344-6.142,0-8.485l-67-67c-2.342-2.343-6.143-2.343-8.484,0c-2.344,2.343-2.344,6.142,0,8.485l62.757,62.757
		L165.686,210.275z"
            />
          </g>
        </svg>
        <span className={styles404["not-found-button__text"]}>
          Перейти на главную страницу
        </span>
      </Link>
    </section>
    </Layout>
  );
}
