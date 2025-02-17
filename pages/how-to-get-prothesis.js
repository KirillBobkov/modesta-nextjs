import Layout from "../components/Layout/Layout.js";
import React, { useEffect, useState } from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";
import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { ArticleBlock } from "../components/ArticleBlock/ArticleBlock.js";
import { howToGetProthesis } from '../content/articles/howToGetProthesis.js'
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  useScrollToLocation();

  const metaConfig = {
    seoContent: `Получение протеза в России: пошаговое руководство

Основные этапы:
✓ Сбор необходимых документов
✓ Взаимодействие с ФСС
✓ Процесс получения протеза

Важные аспекты:
• Государственная поддержка
• Сроки оформления
• Необходимые условия`,
    title: "Как получить протез бесплатно | Пошаговая инструкция — Модеста",
    description: "Подробное руководство по получению протеза за счет государства. Все этапы оформления документов и взаимодействия с ФСС.",
    keywords: "получение протеза, бесплатный протез, государственная поддержка, оформление протеза, фсс протезирование",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset">
        <ArticleBlock articleContent={howToGetProthesis}/>
      </VisibilityManager>
    </Layout>
  );
}