import Layout from "../components/Layout/Layout.js";
import React, { useEffect, useState } from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";
import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { ArticleBlock } from "../components/ArticleBlock/ArticleBlock.js";
import { phantomPain } from '../content/articles/phantomPain.js'
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";
export default () => {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  useScrollToLocation();
  
  const metaConfig = {
    seoContent: `Фантомные боли после ампутации: причины и способы лечения

Ключевые аспекты:
✓ Механизмы возникновения фантомных болей
✓ Актуальные методики терапии
✓ Экспертные рекомендации

Практические рекомендации:
• Техники самостоятельной помощи
• Лекарственная терапия
• Комплексы упражнений для реабилитации`,
    title: `Как справиться с фантомными болями после ампутации — Модеста`,
    description: "Исследуйте причины возникновения и эффективные методы борьбы с фантомными болями. Экспертные рекомендации и практические советы специалистов.",
    keywords: "лечение фантомных болей, реабилитация ампутация, управление болью, протезирование помощь, терапия фантомных болей",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset">
        <ArticleBlock articleContent={phantomPain}/>
      </VisibilityManager>
    </Layout>
  );
}