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
    seoContent: `
История создания компании МОДЕСТА: путь инновационного развития

Истоки компании:
✓ Основание команды энтузиастов-инженеров
✓ Первые разработки в области бионических протезов
✓ Формирование миссии по созданию доступных протезов высокого качества

Вступление в Сколково:
✓ Присоединение к инновационному центру "Сколково" [указать год]
✓ Получение статуса резидента технопарка
✓ Доступ к современной инфраструктуре и экспертной поддержке

Этапы развития производства:
✓ Запуск первой линейки протезов [указать год]
✓ Непрерывное совершенствование технологий
✓ Расширение ассортимента продукции

Вехи развития:
• Создание первых прототипов
• Тестирование и улучшение моделей
• Выход на российский рынок медицинских изделий
• Установление партнерских отношений с медучреждениями

Достижения компании:
✓ Разработка собственных технологий производства
✓ Патентование уникальных решений
✓ Признание экспертного сообщества
✓ Положительные отзывы пользователей

Ключевые запросы для поисковой оптимизации:
#историяМодеста #резидентыСколково #бионическиеПротезы #российскоПроизводство #медицинскиеИнновации #развитиеКомпании #протезированиеРоссия #технологииБудущего #инновационныеКомпании #медицинскаЯтехника
    `,
    title: "Вдохновляющий и непредсказуемый путь в мире протезирования — Модеста",
    description:
      "С самых первых дней нашей работы мы стремимся помочь людям вернуться к полноценной жизни. Мы создаём протезы, основываясь на новейших технологиях и исследованиях. И сегодня мы с уверенностью можем сказать, что наши усилия были не напрасны. Мы не останавливаемся на достигнутом и продолжаем развиваться, чтобы предлагать вам еще более качественные и удобные протезы. Наша история продолжается, и мы приглашаем вас стать ее частью!",
    keywords: "время стартап протезирование протезы временной путь история компании развитие сколково телемедфорум резиденты",
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
