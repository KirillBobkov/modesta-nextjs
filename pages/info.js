import Layout from "../components/Layout/Layout";
import React, { useEffect } from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";

import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { BooksBlock } from "../components/BooksBlock/BooksBlock.jsx";
import { LawsBlock } from "../components/LawsBlock/LawsBlock.jsx";
import { ArticlesGrid } from "../components/ArticlesGrid/ArticlesGrid";
import { useRouter } from "next/router.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";

export default function InfoPage() {
  const router = useRouter();

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    pageTitle: "Законодательство, полезные статьи, и книги о протезировании",
    title: "Книги, статьи и научные работы о протезировании — Модеста",
    description:
      "Все ответы на вопросы о протезировании. Мы собрали наиболее часто задаваемые вопросы и подготовили подробные ответы на них. А ссылки на полезные ресурсы, предоставленные нами, помогут вам получить еще больше информации по этой теме.",
    keywords: "habr vc.ru dzen vk telegram youtube видео статьи о протезировании вопрос и ответы FAQ ",
  };
  useScrollToLocation();
  return (
    <Layout metaConfig={metaConfig}>
      <VisibilityManager className="page-offset">
        <BooksBlock />
        <ArticlesGrid />
        <LawsBlock />
      </VisibilityManager>
    </Layout>
  );
}
