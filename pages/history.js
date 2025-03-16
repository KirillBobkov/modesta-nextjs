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
    seoContent: `Эволюция и ключевые вехи компании Модеста

Основные периоды развития:
✓ Научно-исследовательская деятельность и инновационные проекты
✓ Технологические инновации в сфере протезирования
✓ Расширение производственных мощностей и рост компании

Ключевые достижения:
• Внедрение прогрессивных технологических решений
• Формирование профессиональной команды разработчиков
• Достижение ведущих позиций в индустрии протезирования
• Признание на международном уровне

Долгосрочные приоритеты:
• Непрерывное развитие технологической базы
• Повышение доступности инновационных решений
• Содействие повышению качества жизни пользователей`,
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
