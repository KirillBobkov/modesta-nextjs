import Layout from "../components/Layout/Layout.js";
import React, { useEffect } from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";
import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { ArticleBlock } from "../components/ArticleBlock/ArticleBlock.js";
import { howToGetProthesis } from '../content/articles/howToGetProthesis.js'
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter();

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  useScrollToLocation();

  const metaConfig = {
    pageTitle: "Как получить протез за счет государства",
    title: `${howToGetProthesis.title} — Модеста`,
    description: "Как мне получить протез руки в России бесплатно? Способы получения протезы",
    keywords: "предплечье реабилитация протез руки разработка дизайн сколково курган модеста  сво травма рука протезирование",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <VisibilityManager className="page-offset">
        <ArticleBlock articleContent={howToGetProthesis}/>
      </VisibilityManager>
    </Layout>
  );
}