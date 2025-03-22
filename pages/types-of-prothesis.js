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
    seoContent: `Обзор современных типов протезов верхних конечностей 2025

Инновационные решения:
✓ Бионические протезы с нейроуправлением
✓ Высокотехнологичные механические системы
✓ Индивидуальные косметические модели
✓ Специализированные детские протезы

Бионические протезы:
• Многоканальное миоэлектрическое управление
• Адаптивные алгоритмы движения
• Тактильная обратная связь
• Интеллектуальные режимы работы

Механические протезы:
• Надежные тяговые системы
• Регулируемые механизмы захвата
• Прочные композитные материалы
• Эргономичная конструкция

Косметические решения:
• Высокореалистичный внешний вид
• Индивидуальное цветовое исполнение
• Анатомическая точность
• Гипоаллергенные материалы

Детское протезирование:
• Растущие конструкции
• Облегченные материалы
• Яркий дизайн
• Специальные обучающие программы

#типыПротезов #бионическиеПротезы #протезированиеРук #детскоеПротезирование #инновационныеПротезы #технологииПротезирования`,
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
