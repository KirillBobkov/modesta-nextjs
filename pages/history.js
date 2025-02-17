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
    seoContent: `История инноваций: путь компании Модеста

Этапы развития:
✓ Создание первых прототипов
✓ Внедрение передовых технологий
✓ Расширение производства

Истоки компании:
✓ Основание команды энтузиастов-инженеров
✓ Первые разработки в области бионических протезов
✓ Формирование миссии по созданию доступных протезов высокого качества

Вступление в Сколково:
✓ Присоединение к инновационному центру "Сколково" [указать год]
✓ Получение статуса резидента технопарка
✓ Доступ к современной инфраструктуре и экспертной поддержке

Вехи развития:
• Тестирование и улучшение моделей
• Выход на российский рынок медицинских изделий
• Установление партнерских отношений с медучреждениями

Достижения компании:
✓ Разработка собственных технологий производства
✓ Патентование уникальных решений
✓ Признание экспертного сообщества
✓ Положительные отзывы пользователей

#историяМодеста #резидентыСколково #бионическиеПротезы #российскоПроизводство #медицинскиеИнновации #развитиеКомпании #протезированиеРоссия #технологииБудущего #инновационныеКомпании #медицинскаЯтехника
    `,
    title: "История развития компании Модеста | Путь инноваций в протезировании",
    description: "Познакомьтесь с историей компании Модеста - от первых разработок до современных достижений в области протезирования верхних конечностей.",
    keywords: "история модеста, развитие компании, инновации протезирование, достижения протезы, технологический прогресс",
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
