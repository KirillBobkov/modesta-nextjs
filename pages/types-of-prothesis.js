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
    seoContent: `Современные типы протезов верхних конечностей 2025: Инновационные решения Модеста

Биоэлектрические протезы нового поколения:
✓ Нейросетевое управление движениями
✓ Мультисенсорная обратная связь
✓ Адаптивные алгоритмы захвата
✓ Энергоэффективные системы питания

Механические протезы 2025:
• Усовершенствованные тяговые системы
• Прецизионные механизмы захвата
• Легкие композитные материалы
• Эргономичный дизайн

Косметические решения:
• Фотореалистичное моделирование
• Биометрическая точность
• Гипоаллергенные материалы
• Индивидуальная настройка

Спортивные протезы:
• Высокая ударопрочность
• Водонепроницаемость IP67
• Специализированные захваты
• Быстрая смена модулей

Детские протезы:
• Регулируемый размер
• Игровые элементы управления
• Безопасные материалы
• Развивающие функции

Технологические преимущества:
• Модульная архитектура
• Цифровая настройка
• Облачная синхронизация
• Регулярные обновления

#протезы2025 #бионика #механическиеПротезы #косметическиеПротезы #спортивныеПротезы #детскиеПротезы #инновации`,
    title: "Типы и особенности протезов рук — Модеста",
    description: "Актуальный обзор 2025 года: инновационные биоэлектрические, косметические и детские протезы. Особенности современных моделей и рекомендации по подбору.",
    keywords: "типы протезов 2025, нейроинтерфейсы, умные протезы, детское протезирование, технологии Модеста, бионические системы",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset">
        <ArticleBlock articleContent={typesOfProthesis}/>
      </VisibilityManager>
    </Layout>
  );
}
