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
    seoContent: `Информационные материалы о передовых технологиях протезирования

Образовательные источники:
✓ Актуальные научные статьи и исследовательские работы
✓ Профильная техническая литература
✓ Руководства по эксплуатации и адаптации

Представленные ресурсы:
• Инновационные технологические решения
• Учебно-методические материалы
• Законодательные и нормативные акты
• Разъяснения по распространенным вопросам`,
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
