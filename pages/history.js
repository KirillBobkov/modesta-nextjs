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
    seoContent: `История развития и инновационный путь компании Модеста

Этапы становления компании:
✓ Основание научно-исследовательского центра
✓ Разработка первых прототипов протезов
✓ Запуск серийного производства
✓ Выход на международный рынок

Ключевые достижения:
• Создание уникальных технологических решений
• Формирование научной школы протезирования
• Развитие производственной инфраструктуры
• Внедрение инновационных материалов

Технологические прорывы:
• Разработка биоэлектрических систем
• Внедрение композитных материалов
• Создание умных алгоритмов управления
• Оптимизация производственных процессов

Развитие компетенций:
• Расширение научной базы
• Укрепление производственных мощностей
• Совершенствование сервисной сети
• Международная сертификация

#историяУспеха #развитиеТехнологий #российскиеИнновации #прогрессМедицины #достиженияНауки #историяПротезирования #технологииБудущего`,
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
