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
    seoContent: `История развития: путь компании Модеста

Этапы становления:
✓ Разработка первых моделей
✓ Освоение современных технологий
✓ Масштабирование производства

Основы компании:
✓ Формирование команды специалистов
✓ Начальные разработки бионических протезов
✓ Определение миссии по созданию качественных и доступных решений

Сотрудничество со Сколково:
✓ Интеграция в инновационный центр "Сколково"
✓ Получение статуса резидента
✓ Использование передовой инфраструктуры

Ключевые моменты:
• Совершенствование прототипов
• Выход на медицинский рынок России
• Развитие сети медицинских партнеров

Успехи компании:
✓ Создание уникальных производственных технологий
✓ Регистрация патентов
✓ Одобрение профессионального сообщества
✓ Благодарные отзывы клиентов

#историяМодеста #резидентыСколково #бионическиеПротезы #российскоеПроизводство #медицинскиеИнновации #развитиеКомпании #протезированиеРоссия #технологииБудущего #инновационныеКомпании #медицинскаяТехника`,
    title: "История становления компании Модеста | От идеи к инновациям",
    description: "Узнайте историю компании Модеста - от первых идей до современных достижений в сфере протезирования верхних конечностей.",
    keywords: "развитие модеста, становление компании, прогресс протезирование, успехи протезы, инновационное развитие",
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
