import Layout from "../components/Layout/Layout.js";
import React, { useEffect, useState } from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";
import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { ArticleBlock } from "../components/ArticleBlock/ArticleBlock.js";
import { phantomPain } from "../content/articles/phantomPain.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";
export default () => {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  useScrollToLocation();

  const metaConfig = {
    seoContent: `Фантомные боли — это ощущение боли в отсутствие видимых причин. Узнайте, как их лечить и предотвращать.

Научное понимание:
✓ Механизмы возникновения фантомных болей
✓ Современные методы диагностики
✓ Индивидуальные факторы развития
✓ Прогностические критерии

Методы лечения:
• Медикаментозная терапия нового поколения
• Нейростимуляционные технологии
• Биологическая обратная связь
• Зеркальная терапия

Реабилитационные программы:
• Психологическая поддержка
• Физиотерапевтические методики
• Техники релаксации
• Двигательная терапия

Инновационные подходы:
• Виртуальная реальность в терапии
• Нейропластическая реорганизация
• Когнитивно-поведенческая терапия
• Интегративные методы лечения

Профилактика и контроль:
• Ранняя диагностика
• Превентивные меры
• Мониторинг состояния
• Адаптация образа жизни

#фантомныеБоли #лечениеБоли #реабилитацияПротезирование #инновационнаяТерапия #психологическаяПоддержка #современнаяМедицина`,
    title: "Лечение фантомных болей | Современные методы терапии — Модеста",
    description:
      "Эффективные методы лечения и контроля фантомных болей после ампутации. Комплексный подход, включающий медикаментозную терапию, психологическую поддержку и инновационные методики.",
    keywords:
      "фантомные боли, лечение фантомных болей, реабилитация после ампутации, терапия боли, психологическая поддержка, инновационные методы лечения",
  };

  return (
    <Layout
      metaConfig={metaConfig}
      popupOpened={popupOpened}
      setOpened={setOpened}
    >
      <VisibilityManager className="page-offset">
        <ArticleBlock articleContent={phantomPain} />
      </VisibilityManager>
    </Layout>
  );
};
