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
    seoContent: `Фантомные боли после ампутации: причины и методы борьбы

Основные аспекты:
✓ Природа фантомных болей
✓ Современные методы лечения
✓ Рекомендации специалистов

Практические советы:
• Методики самопомощи
• Медикаментозное лечение
• Реабилитационные упражнения`,
    title: `Фантомные боли после ампутации: как с ними справиться — Модеста`,
    description: "Узнайте о причинах возникновения и методах борьбы с фантомными болями после ампутации. Практические рекомендации и советы специалистов.",
    keywords: "фантомные боли, лечение фантомных болей, реабилитация после ампутации, борьба с болью, протезирование конечностей",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset">
        <ArticleBlock articleContent={phantomPain}/>
      </VisibilityManager>
    </Layout>
  );
}