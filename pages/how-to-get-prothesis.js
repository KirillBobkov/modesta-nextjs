import Layout from "../components/Layout/Layout.js";
import React, { useEffect, useState } from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";
import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { ArticleBlock } from "../components/ArticleBlock/ArticleBlock.js";
import { howToGetProthesis } from '../content/articles/howToGetProthesis.js'
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  useScrollToLocation();

  const metaConfig = {
    seoContent: `Полное руководство по получению современного протеза в 2025 году

Процесс оформления:
✓ Подготовка медицинской документации
✓ Прохождение медико-социальной экспертизы
✓ Оформление ИПРА и документов ФСС
✓ Индивидуальный подбор протеза

Необходимые документы:
• Медицинские заключения специалистов
• Результаты диагностических исследований
• Направление на медико-социальную экспертизу
• Документы, удостоверяющие личность

Государственная поддержка:
• Бесплатное получение протеза по ФСС
• Компенсация расходов на протезирование
• Льготы на техническое обслуживание
• Программы реабилитации

Сроки и этапы:
• Подготовка документации: 2-3 недели
• Прохождение МСЭ: 1 месяц
• Изготовление протеза: 30-45 дней
• Период адаптации: 2-3 месяца

#получениеПротеза #бесплатныйПротез #поддержкаФСС #оформлениеИПРА #социальнаяПомощь #протезированиеРук`,
    title: "Как получить протез бесплатно | Модеста",
    description: "Подробная инструкция по оформлению государственного финансирования для получения протеза. Полное описание процесса взаимодействия с ФСС.",
    keywords: "получение протеза, государственное финансирование, поддержка государства, документы для протезирования, оформление ФСС",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset">
        <ArticleBlock articleContent={howToGetProthesis}/>
      </VisibilityManager>
    </Layout>
  );
}