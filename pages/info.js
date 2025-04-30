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
    seoContent: `Информационный портал о протезировании верхних конечностей 2025

Образовательные материалы:
✓ Научные исследования и публикации
✓ Методические рекомендации
✓ Практические руководства
✓ Видеоинструкции и обзоры

Технологические обзоры:
• Биоэлектрические протезы
• Механические системы
• Косметические решения
• Детское протезирование

Нормативная база:
• Законодательство о ТСР
• Стандарты протезирования
• Гарантийные условия
• Правила обслуживания

Реабилитационные программы:
• Методы адаптации
• Физиотерапия
• Психологическая поддержка
• Социальная интеграция

Полезная информация:
• Часто задаваемые вопросы
• Советы специалистов
• Истории успеха
• Новости отрасли

#протезирование2025 #медицинскаяИнформация #реабилитация #обучение #технологии #здоровье`,
    title: "Современные подходы к протезированию верхних конечностей — Модеста",
    description: "Подробный обзор актуальных публикаций, специализированной литературы и последних исследований в области протезирования, а также ответы на часто задаваемые вопросы.",
    keywords: "протезирование, публикации о протезах, литература по протезированию, исследования в области протезов, вопросы по протезированию, библиотека Модеста",
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
