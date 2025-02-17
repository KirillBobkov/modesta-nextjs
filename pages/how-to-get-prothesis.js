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
    seoContent: `Процесс получения протеза в России: подробное руководство

Ключевые шаги:
✓ Подготовка документации
✓ Работа с Фондом социального страхования
✓ Этапы получения изделия

Существенные моменты:
• Поддержка от государства
• Временные рамки
• Требования к оформлению`,
    title: "Получение протеза бесплатно | Пошаговое руководство — Модеста",
    description: "Детальная инструкция по оформлению государственного финансирования протеза. Полное описание процесса взаимодействия с ФСС.",
    keywords: "оформление протеза, государственный протез, поддержка государства, документы протезирование, фсс оформление",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset">
        <ArticleBlock articleContent={howToGetProthesis}/>
      </VisibilityManager>
    </Layout>
  );
}