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
    seoContent: `Детальная инструкция по оформлению протеза в Российской Федерации

Последовательность действий:
✓ Комплектация необходимой медицинской документации
✓ Коммуникация с Фондом социального страхования и медучреждениями
✓ Персональный подбор и установка протезной системы

Полезная информация:
• Меры государственной поддержки и социальные льготы
• Регламентированные периоды обработки заявлений
• Реабилитационные мероприятия
• Экспертные консультации специалистов`,
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