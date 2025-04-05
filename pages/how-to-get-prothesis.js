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
    seoContent: `Актуальное руководство по получению современного протеза в 2024 году: Обновленные процедуры и возможности

Оптимизированный процесс 2024:
✓ Цифровая подготовка документации
✓ Дистанционное взаимодействие с МСЭ
✓ Электронное оформление ИПРА и ФСС
✓ Персонализированный подбор протеза

Обновленный пакет документов:
• Цифровые медицинские заключения
• Электронные результаты обследований
• Онлайн-направление на МСЭ
• Цифровой профиль пациента

Расширенная господдержка 2024:
• Увеличенное финансирование по ФСС
• Новые программы компенсации
• Расширенное техническое обслуживание
• Комплексные реабилитационные программы

Оптимизированные сроки:
• Цифровая подготовка: 1-2 недели
• Онлайн-МСЭ: 2-3 недели
• Производство протеза: 20-30 дней
• Персонализированная адаптация: 1-2 месяца

#получениеПротеза2024 #цифровоеОформление #поддержкаФСС #современнаяРеабилитация #социальнаяПомощь #умноеПротезирование`,
    title: "Как получить протез бесплатно | Модеста",
    description: "Актуальная инструкция 2024 года по оформлению государственного финансирования для получения протеза. Обновленный процесс взаимодействия с ФСС.",
    keywords: "получение протеза 2024, цифровое оформление, господдержка протезирования, электронные документы, современный ФСС",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset">
        <ArticleBlock articleContent={howToGetProthesis}/>
      </VisibilityManager>
    </Layout>
  );
}