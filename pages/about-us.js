import React, { useEffect, useState } from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import Layout from "../components/Layout/Layout.js";
import { HistoryBlock } from "../components/HistoryBlock/HistoryBlock.jsx";
import { SocialNetworkBlock } from "../components/SocialNetworkBlock/SocialNetworkBlock.jsx";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";
import { VideoWidget } from "../components/VideoWidget/VideoWidget.jsx";

import aboutRender from "../assets/images/aboutRender.webp";

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
    seoContent: `Компания Модеста — ведущий разработчик передовых протезов

Наши ключевые цели:
✓ Разработка функциональных и эргономичных протезных систем
✓ Повышение доступности инновационных технологий протезирования
✓ Продвижение современных биомеханических решений

Фундаментальные принципы:
• Прогрессивный подход к созданию протезов
• Высокие стандарты качества и долговечности
• Персонализированные решения для каждого клиента
• Непрерывное улучшение технологических процессов`,
    title: "Компания Модеста | Лидер в разработке инновационных протезов",
    description: "Модеста — ведущий российский производитель современных протезов верхних конечностей. Узнайте о наших целях, технологиях и достижениях в области протезирования.",
    keywords: "компания модеста, разработка протезов, современные протезы, протезы в россии, технологии протезирования, бионика протезы",
  };
  return (
    <Layout  metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset" side="opacity">
        <HistoryBlock image={missionContent.image} title={missionContent.title} description={missionContent.description} />
        <SocialNetworkBlock />
        <VideoWidget />
      </VisibilityManager>
    </Layout>
  );
}
