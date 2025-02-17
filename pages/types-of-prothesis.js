import Layout from "../components/Layout/Layout";
import React, { useEffect, useState } from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";

import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { ArticleBlock } from "../components/ArticleBlock/ArticleBlock.js";
import { typesOfProthesis } from "../content/articles/typesOfProthesis.js";
import { useRouter } from "next/router.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";

export default () => {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  useScrollToLocation();

  const metaConfig = {
    seoContent: "Разновидности современных протезов верхних конечностей",
    title: `Виды и особенности протезов рук — Модеста`,
    description: "Подробный обзор различных типов протезов: биоэлектрические, косметические, детские протезы. Особенности каждого вида и рекомендации по выбору.",
    keywords: "виды протезов, биоэлектрические протезы, косметические протезы, детское протезирование, модеста технологии",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset">
        <ArticleBlock articleContent={typesOfProthesis}/>
      </VisibilityManager>
    </Layout>
  );
}
