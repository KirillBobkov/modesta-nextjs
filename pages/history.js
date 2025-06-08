import React, { useEffect, useState } from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import { NewMap } from "../components/NewMap.jsx";
import Layout from "../components/Layout.js";
import { TeamBlock } from "../components/TeamBlock.jsx";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";

export default function HistoryPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    seoContent: `История компании Модеста: Путь инноваций в протезировании

Основные этапы развития:
✓ Создание исследовательского центра
✓ Разработка первых протезов
✓ Запуск производства
✓ Международное признание

Технологические достижения:
• Инновационные биоэлектрические системы
• Уникальные алгоритмы управления
• Передовые материалы и компоненты
• Модульная архитектура протезов

Научные прорывы:
• Собственные исследования в области бионики
• Разработка нейроинтерфейсов
• Совершенствование биомеханики
• Интеграция искусственного интеллекта

Развитие компании:
• Расширение производственных мощностей
• Создание сервисной сети
• Международное сотрудничество
• Социальные инициативы

Современные достижения:
• Лидерство в российском протезировании
• Инновационные разработки
• Высокое качество продукции
• Комплексная поддержка пользователей

#историяМодеста #инновацииВМедицине #российскиеТехнологии #развитиеПротезирования #научныеДостижения`,
    title: "История развития компании Модеста | Путь инноваций",
    description: "Познакомьтесь с историей компании Модеста - от первых разработок до лидерства в области протезирования верхних конечностей.",
    keywords: "история модеста, эволюция компании, прогресс протезирование, достижения протезы, технологическое развитие",
  };
  return (
    <Layout  metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="pt-[40px] md:pt-[150px]" side="opacity">
        <NewMap />
        <TeamBlock />
      </VisibilityManager>
    </Layout>
  );
}
