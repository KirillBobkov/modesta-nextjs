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
    seoContent: `Фантомные боли 2025: Современные методы лечения и реабилитации

Нейробиологические исследования:
✓ Механизмы формирования фантомных болей
✓ Нейропластичность головного мозга
✓ Генетические факторы риска
✓ Индивидуальные особенности течения

Инновационные методы терапии:
• Нейромодуляция нового поколения
• Транскраниальная магнитная стимуляция
• Зеркальная терапия с VR
• Биологическая обратная связь

Комплексная реабилитация:
• Когнитивно-поведенческая терапия
• Физиотерапевтические методики
• Медитативные практики
• Лечебная физкультура

Технологические решения:
• Виртуальная реальность в терапии
• Нейроинтерфейсы для контроля боли
• Мобильные приложения мониторинга
• Телемедицинские консультации

Профилактика и контроль:
• Ранняя диагностика
• Индивидуальные программы
• Регулярный мониторинг
• Психологическая поддержка

Дополнительные методы:
• Медикаментозная терапия
• Иглорефлексотерапия
• Массаж и мануальная терапия
• Диетотерапия

#фантомныеБоли2025 #нейрореабилитация #современнаяТерапия #VRтерапия #реабилитация #медицинскиеТехнологии`,
    title: "Лечение фантомных болей | Современные методы терапии — Модеста",
    description:
      "Эффективные методы лечения и контроля фантомных болей после ампутации. Комплексный подход, включающий медикаментозную терапию, психологическую поддержку и инновационные методики 2025 года.",
    keywords:
      "фантомные боли 2025, лечение фантомных болей, нейрореабилитация, цифровая терапия, VR терапия, инновационные методы лечения",
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
