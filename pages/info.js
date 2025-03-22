import Layout from "../components/Layout/Layout";
import React, { useEffect, useState } from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";

import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { BooksBlock } from "../components/BooksBlock/BooksBlock.jsx";
import { LawsBlock } from "../components/LawsBlock/LawsBlock.jsx";
import { ArticlesGrid } from "../components/ArticlesGrid/ArticlesGrid";
import { useRouter } from "next/router.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";

export default function InfoPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    seoContent: `База знаний о современном протезировании верхних конечностей

Научно-образовательные материалы:
✓ Последние исследования в области бионики
✓ Инновационные методики реабилитации
✓ Практические руководства по адаптации
✓ Обзоры технологических решений

Информационные ресурсы:
• Научные публикации и статьи
• Методические рекомендации
• Видеоматериалы и инструкции
• Клинические исследования

Нормативная документация:
• Стандарты протезирования
• Правовые аспекты получения ТСР
• Регламенты обслуживания
• Гарантийные обязательства

Образовательные материалы:
• Руководства по использованию
• Программы реабилитации
• Советы специалистов
• Ответы на частые вопросы

#знанияОпротезах #обучениеПротезированию #информацияОпротезах #реабилитацияЗнания #медицинскаяИнформация #протезированиеОбучение`,
    title: "Современные подходы к протезированию верхних конечностей — Модеста",
    description: "Подробный обзор актуальных публикаций, специализированной литературы и последних исследований в области протезирования, а также ответы на часто задаваемые вопросы.",
    keywords: "протезирование, публикации о протезах, литература по протезированию, исследования в области протезов, вопросы по протезированию, библиотека Модеста",
  };
  useScrollToLocation();
  return (
    <Layout
      metaConfig={metaConfig}
      popupOpened={popupOpened}
      setOpened={setOpened}
    >
      <VisibilityManager className="page-offset">
        <ArticlesGrid />
        <BooksBlock />
        <LawsBlock />
      </VisibilityManager>
    </Layout>
  );
}
