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
    seoContent: `Получение современного протеза в 2025 году: Пошаговая инструкция от Модеста

Цифровой процесс оформления:
✓ Онлайн-консультация со специалистом
✓ Электронная подача документов
✓ Дистанционное взаимодействие с МСЭ
✓ Цифровое оформление ИПРА

Необходимые документы 2025:
• Паспорт и СНИЛС
• Медицинские заключения
• Результаты обследований
• Направление на МСЭ

Государственная поддержка:
• Финансирование по ФСС
• Компенсационные программы
• Техническое обслуживание
• Реабилитационные услуги

Этапы получения протеза:
• Консультация и подбор модели
• Оформление документов
• Изготовление протеза
• Настройка и обучение

Сроки и гарантии:
• Быстрое оформление документов
• Оптимальные сроки производства
• Гарантийное обслуживание
• Техническая поддержка

Дополнительные возможности:
• Социальная реабилитация
• Психологическая поддержка
• Обучение использованию
• Регулярное обслуживание

#получениеПротеза2025 #господдержка #ФСС #реабилитация #протезирование #социальнаяПомощь`,
    title: "Как получить протез бесплатно | Модеста",
    description: "Актуальная инструкция 2025 года по оформлению государственного финансирования для получения протеза. Обновленный процесс взаимодействия с ФСС.",
    keywords: "получение протеза 2025, цифровое оформление, господдержка протезирования, электронные документы, современный ФСС",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="pt-[40px] md:pt-[150px]">
        <ArticleBlock articleContent={howToGetProthesis}/>
      </VisibilityManager>
    </Layout>
  );
}