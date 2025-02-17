import Layout from "../components/Layout/Layout";
import React, { useEffect, useState } from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";

import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { BooksBlock } from "../components/BooksBlock/BooksBlock.jsx";
import { LawsBlock } from "../components/LawsBlock/LawsBlock.jsx";
import { ArticlesGrid } from "../components/ArticlesGrid/ArticlesGrid";
import { useRouter } from "next/router.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";

export default function InfoPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    seoContent: "Информационные ресурсы о протезировании",
    title: "Полезные материалы о протезировании верхних конечностей — Модеста",
    description: "Исчерпывающая информация о протезировании: научные статьи, книги, исследования и ответы на частые вопросы. Узнайте больше о современных технологиях протезирования.",
    keywords: "протезирование информация, научные статьи протезы, книги протезирование, исследования протезы, FAQ протезирование, модеста информация",
  };
  useScrollToLocation();
  return (
    <Layout
      metaConfig={metaConfig}
      popupOpened={popupOpened}
      setOpened={setOpened}
    >
      <VisibilityManager className="page-offset">
        <ArticlesGrid />
        <BooksBlock />
        <LawsBlock />
      </VisibilityManager>
    </Layout>
  );
}
