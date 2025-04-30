import React, { useEffect, useState } from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import Layout from "../components/Layout/Layout.js";
import { HistoryBlock } from "../components/HistoryBlock/HistoryBlock.jsx";
import { SocialNetworkBlock } from "../components/SocialNetworkBlock/SocialNetworkBlock.jsx";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";
import { VideoWidget } from "../components/VideoWidget/VideoWidget.jsx";

import aboutRender from "../assets/images/aboutus.webp";
import { PreviewBlock } from "../components/PreviewBlock/PreviewBlock.jsx";

export const missionContent = {
    title: "Создаём качественные функциональные протезы",
    description: `Мы специализируемся на разработке протезов для верхних конечностей, 
    включая модели тягового и биоэлектрического типа.
  
    Наши изделия помогают вернуть утраченные возможности, 
    улучшить функциональность и комфорт, позволяют активно участвовать в повседневных занятиях, 
    работе и социальной жизни.
  
    Разрабатывая наши прототипы, мы решаем сложные задачи,
     связанные с функциональностью, хватательной силой, практичностью и долговечностью протезов, 
     а так же обеспечиваем высокий уровень в реабилитации. 
    Мы предоставляем оптимальные решения для адаптации и качества жизни`,
    image: aboutRender
  };

export default function AboutUsPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    seoContent: `Модеста — инновационный лидер протезирования в России 2025

Наша экспертиза и достижения:
✓ Собственный исследовательский центр
✓ Передовое производство полного цикла
✓ Международные патенты и сертификаты
✓ Команда ведущих специалистов отрасли

Ключевые направления развития 2025:
• Нейроинтерфейсы нового поколения
• Искусственный интеллект в управлении протезами
• Биомеханические исследования
• Социальные программы поддержки

Технологические инновации:
• Собственные разработки в области бионики
• Уникальные алгоритмы управления
• Инновационные материалы и компоненты
• Модульная архитектура протезов

Социальная миссия:
• Доступность современных решений
• Поддержка реабилитационных программ
• Образовательные инициативы
• Международное сотрудничество

Качество и надежность:
• Строгий контроль на всех этапах
• Гарантийное обслуживание
• Техническая поддержка 24/7
• Регулярные обновления

#модеста2025 #инновацииВМедицине #российскиеТехнологии #протезирование #бионика #социальнаяОтветственность #медицинскиеТехнологии`,
    title: "Компания Модеста | Лидер в разработке инновационных протезов",
    description: "Модеста — ведущий российский производитель современных протезов верхних конечностей. Узнайте о наших целях, технологиях и достижениях в области протезирования.",
    keywords: "компания модеста 2025, разработка протезов, современные протезы, протезы в россии, технологии протезирования, бионика протезы",
  };
  return (
    <Layout  metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager side="opacity">
        <PreviewBlock img={missionContent.image} title={missionContent.title} />
        <HistoryBlock />
        <SocialNetworkBlock />
        <VideoWidget />
      </VisibilityManager>
    </Layout>
  );
}
