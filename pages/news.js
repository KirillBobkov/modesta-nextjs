import React, { useEffect, useState } from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import Layout from "../components/Layout.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";
import NewsFeed from "../components/NewsFeed";
import { PreviewBlock } from '../components/PreviewBlock.jsx';
import newsBack from '../assets/images/news.webp';

export default function NewsPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    seoContent: `Новости и события компании Модеста 2025

Технологические достижения:
✓ Разработка новых моделей протезов
✓ Внедрение инновационных технологий
✓ Улучшение существующих решений
✓ Расширение функциональности

Научные исследования:
• Биомеханические разработки
• Нейроинтерфейсы нового поколения
• Искусственный интеллект в управлении
• Клинические испытания

Социальные проекты:
• Программы реабилитации
• Образовательные инициативы
• Поддержка пользователей
• Международное сотрудничество

События и мероприятия:
• Выставки и конференции
• Презентации новинок
• Встречи с пользователями
• Обучение специалистов

#новостиМодеста2025 #инновации #технологии #протезирование #развитие #медицина`,
    title: "Новости компании Модеста | Прогресс в протезировании",
    description: "Актуальные новости о разработках, успехах и мероприятиях компании Модеста. Следите за развитием технологий протезирования.",
    keywords: "новости протезирование, разработки модеста, технологии протезов, достижения компании, инновации будущего",
  };
  return (
    <Layout  metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <PreviewBlock img={newsBack.src} title={'Новости'} />
        <NewsFeed />
    </Layout>
  );
}
