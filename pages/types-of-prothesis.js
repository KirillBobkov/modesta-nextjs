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
    seoContent: `Обзор современных типов протезов верхних конечностей 2024: Новое поколение технологий

Передовые разработки 2024:
✓ Нейроинтерфейсные бионические системы
✓ Модернизированные механические протезы
✓ Персонализированные косметические решения
✓ Инновационные детские модели

Бионические технологии:
• Мультимодальное нейроуправление
• Самообучающиеся алгоритмы движения
• Расширенная сенсорная обратная связь
• Облачная синхронизация настроек

Усовершенствованные механические системы:
• Оптимизированные тяговые механизмы
• Прецизионные системы захвата
• Сверхлегкие композитные материалы
• Биомеханическая эргономика

Косметические инновации 2024:
• Фотореалистичное моделирование
• Динамическая пигментация
• Биометрическая точность
• Современные биосовместимые материалы

Детские решения нового поколения:
• Адаптивные модульные системы
• Интеллектуальные материалы
• Геймифицированное управление
• Цифровое обучение использованию

#протезы2024 #бионическиеТехнологии #умныеПротезы #детскоеПротезирование #инновационныеРазработки #цифровыеТехнологии #нейроинтерфейсы`,
    title: "Типы и особенности протезов рук — Модеста",
    description: "Актуальный обзор 2024 года: инновационные биоэлектрические, косметические и детские протезы. Особенности современных моделей и рекомендации по подбору.",
    keywords: "типы протезов 2024, нейроинтерфейсы, умные протезы, детское протезирование, технологии Модеста, бионические системы",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset">
        <ArticleBlock articleContent={typesOfProthesis}/>
      </VisibilityManager>
    </Layout>
  );
}
