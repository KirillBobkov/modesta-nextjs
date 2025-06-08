import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";

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
    description:
      "К сожалению, запрашиваемая страница не найдена. Модеста - ведущий производитель инновационных протезов верхних конечностей в России.",
    keywords:
      "404, страница не найдена, протезы рук, модеста, инновационные протезы, протезирование конечностей",
  };

  return (
    <main>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Layout
        metaConfig={metaConfig}
        popupOpened={popupOpened}
        setOpened={setOpened}
      >
        <div className="h-screen w-screen bg-background">
          <section className="fixed top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-background">
            <h1 className="mb-5 text-center text-5xl font-bold uppercase leading-[60px] md:text-8xl">
              404
            </h1>
            <p className="mb-10 w-[90%] text-center text-font-secondary md:w-1/2">
              Страница не найдена. Возможно, она была удалена или перенесена на
              другой адрес.
            </p>

            <Link
              prefetch={false}
              href={"/"}
              className="h-10 gap-2.5 border-none px-5 text-sm cursor-pointer flex items-center justify-between rounded-[30px] text-black fill-black bg-[var(--accent)] transition-all duration-300 ease-out z-[1] shadow-lg md:h-12 md:text-base"
              id="not-found"
            >
              <span className="flex-grow font-bold">НА ГЛАВНУЮ</span>
            </Link>
          </section>
        </div>
      </Layout>
    </main>
  );
}
