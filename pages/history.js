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
    seoContent: `Путь развития компании Модеста

Основные этапы:
✓ От идеи к реализации
✓ Внедрение инноваций
✓ Расширение производства

Ключевые достижения:
• Создание уникальных технологий
• Формирование профессиональной команды
• Признание в отрасли

Наша миссия:
Разработка и производство доступных высокотехнологичных протезов для улучшения качества жизни пациентов`,
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
