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
    seoContent: `Управление фантомными болями после ампутации: методы и решения

Основные направления:
✓ Природа возникновения фантомных ощущений
✓ Современные методы лечения
✓ Рекомендации специалистов

Практические советы:
• Методики самопомощи
• Медикаментозное лечение
• Реабилитационные упражнения`,
    title: `Методы борьбы с фантомными болями после ампутации — Модеста`,
    description: "Изучите причины появления и действенные способы преодоления фантомных болей. Профессиональные рекомендации и практические методики от экспертов.",
    keywords: "фантомные боли лечение, реабилитация после ампутации, контроль боли, помощь при протезировании, терапия фантомных ощущений",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset">
        <ArticleBlock articleContent={phantomPain}/>
      </VisibilityManager>
    </Layout>
  );
}