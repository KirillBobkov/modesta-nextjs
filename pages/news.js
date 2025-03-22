import React, { useEffect, useState } from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import Layout from "../components/Layout/Layout.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";
import { NewsFeed } from "../components/NewsFeed/NewsFeed.jsx";
import { PreviewBlock } from '../components/PreviewBlock/PreviewBlock.jsx';
import newsBack from '../assets/images/news.webp';

export default function NewsPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    seoContent: `Новости и достижения компании Модеста в сфере протезирования

Ключевые направления развития 2024:
✓ Разработка нейроинтерфейсов нового поколения
✓ Внедрение искусственного интеллекта в управление
✓ Расширение линейки детских протезов
✓ Запуск программ социальной поддержки

Технологические прорывы:
• Создание сверхлегких композитных материалов
• Разработка адаптивных алгоритмов управления
• Интеграция тактильной обратной связи
• Оптимизация энергопотребления систем

Научные исследования:
• Биомеханическое моделирование движений
• Нейрофизиологические исследования
• Эргономическое проектирование
• Клинические испытания новых моделей

Социальные инициативы:
• Программы реабилитационной поддержки
• Образовательные проекты для специалистов
• Сотрудничество с медицинскими центрами
• Развитие сервисной инфраструктуры

Международное сотрудничество:
• Обмен опытом с зарубежными партнерами
• Участие в международных выставках
• Совместные исследовательские проекты
• Расширение географии поставок

#новостиПротезирования #инновацииВмедицине #российскиеТехнологии #развитиеПротезирования #медицинскиеРазработки #технологииРеабилитации #достиженияМодеста`,
    title: "Новости компании Модеста | Прогресс в протезировании",
    description: "Актуальные новости о разработках, успехах и мероприятиях компании Модеста. Следите за развитием технологий протезирования.",
    keywords: "новости протезирование, разработки модеста, технологии протезов, достижения компании, инновации будущего",
  };
  return (
    <Layout  metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager side="opacity">
      <PreviewBlock img={newsBack.src} title={'Новости'} />
        <NewsFeed />
      </VisibilityManager>
    </Layout>
  );
}
