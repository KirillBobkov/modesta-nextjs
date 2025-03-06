import React, { useEffect, useState } from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import { NewMap } from "../components/NewMap/NewMap.jsx";
import Layout from "../components/Layout/Layout.js";
import { TeamBlock } from "../components/TeamBlock/TeamBlock.jsx";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";

export default function HistoryPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    seoContent: `История развития и достижения компании Модеста

Этапы становления:
✓ Инновационные разработки и исследования
✓ Технологические прорывы в протезировании
✓ Масштабирование производства и развитие

Значимые результаты:
• Разработка передовых технологий
• Создание экспертной команды специалистов
• Лидерство в отрасли протезирования
• Международное признание

Стратегические цели:
• Постоянное совершенствование технологий
• Расширение доступности решений
• Улучшение качества жизни пациентов`,
    title: "История развития компании Модеста | Путь инноваций",
    description: "Познакомьтесь с историей компании Модеста - от первых разработок до лидерства в области протезирования верхних конечностей.",
    keywords: "история модеста, эволюция компании, прогресс протезирование, достижения протезы, технологическое развитие",
  };
  return (
    <Layout  metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset" side="opacity">
        <NewMap />
        <TeamBlock />
      </VisibilityManager>
    </Layout>
  );
}
