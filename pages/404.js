import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

import { useTheme } from "../hooks/useTheme";



import Link from "next/link";

export default function NotFound() {
  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");

    return () => document.documentElement.classList.remove("overflow-hidden");
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
    <section className="fixed top-0 w-full h-full flex justify-center items-center flex-col bg-[var(--bg-color)] z-10">
      <h1 className="text-6xl leading-[60px] mb-10 font-bold text-center md:text-[80px] md:leading-[80px]">
        404
      </h1>
      <p className="text-[var(--secondary-font-color)] w-[90%] text-center mb-10 md:w-1/2">
        Такой страницы не существует. Возможно, ссылка по которой вы перешли —
        неправильная.
      </p>
      <Link
        prefetch={false}
        href={"/"}
        className="h-10 gap-2.5 border-none px-5 text-sm cursor-pointer flex items-center justify-between rounded-[30px] text-black fill-black bg-[var(--accent)] transition-all duration-300 ease-out z-[1] shadow-lg md:h-12 md:text-base"
        id="not-found"
      >
        <span className="flex-grow font-bold">
          НА ГЛАВНУЮ
        </span>
      </Link>
    </section>
    </Layout>
  );
}
