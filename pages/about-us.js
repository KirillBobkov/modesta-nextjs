import React, { useEffect, useState } from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import Layout from "../components/Layout/Layout.js";
import { HistoryBlock } from "../components/HistoryBlock/HistoryBlock.jsx";
import { SocialNetworkBlock } from "../components/SocialNetworkBlock/SocialNetworkBlock.jsx";
import { VideosGrid } from "../components/VideosGrid/VideosGrid.jsx";
import { missionContent } from "../content/mission.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";
import { VideoWidget } from "../components/VideoWidget/VideoWidget.jsx";

export default function AboutUsPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    seoContent: `Видео и диджитал ресурсы о компании Модеста
• Компания специализируется на разработке протезов для верхних конечностей
• Включает модели тягового и биоэлектрического типа
Функциональные протезы
• Помогают вернуть утраченные возможности
• Улучшают функциональность и комфорт
• Позволяют активно участвовать в повседневных занятиях, работе и социальной жизни
Разработка прототипов
• Решают сложные задачи, связанные с функциональностью, хватательной силой, практичностью и долговечностью протезов
• Обеспечивают высокий уровень в реабилитации
Оптимальные решения для адаптации и качества жизни
• Предоставляют оптимальные решения для адаптации и улучшения качества жизни
Дополнительные материалы
• Оценка красоты момента помогает кино
• В чем отличие антропоморфного протеза от не антропоморфного?
• Замороженный протез. Провал в ходе испытаний?
• Собираем робота-реабилитолога Вертера. Часть 1
• Разработка протезов рук
• Впечатления от I регионального молодёжного профориентационного форума Моя профессия — IT`,
    title: "Видео и диджитал ресурсы о компании — Модеста",
    description:
      "Мы предоставляем доступ к разнообразным видео и цифровым материалам о компании Модеста. Следите за нашими новостями и обновлениями на всех доступных платформах, чтобы быть в курсе последних событий и достижений.",
    keywords: "время стартап протезирование протезы временной путь история компании развитие сколково телемедфорум резиденты",
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
