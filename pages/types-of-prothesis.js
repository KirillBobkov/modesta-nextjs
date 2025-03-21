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
    seoContent: `Передовые технологии протезирования для верхних конечностей

Классификация протезных систем:
✓ Протезы с биоэлектрическим управлением
✓ Механические протезы с расширенной функциональностью
✓ Персонализированные косметические решения

Характеристики различных типов:
• Технологические особенности и преимущества
• Спектр функциональных возможностей
• Методы персональной настройки
• Специализированные разработки для детей`,
    title: "Типы и особенности протезов рук — Модеста",
    description: "Подробный анализ различных категорий протезов: биоэлектрические, косметические и детские модели. Особенности каждого типа и советы по выбору.",
    keywords: "типы протезов, биоэлектрические протезы, косметические протезы, детское протезирование, технологии Модеста",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset">
        <ArticleBlock articleContent={typesOfProthesis}/>
      </VisibilityManager>
    </Layout>
  );
}
