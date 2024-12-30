import React, { useEffect, useState } from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import Layout from "../components/Layout/Layout.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";
import { NewsFeed } from "../components/NewsFeed/NewsFeed.jsx";
import { PreviewBlock } from '../components/PreviewBlock/PreviewBlock.jsx';
import newsBack from '../public/images/news.webp';

export default function NewsPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    pageTitle: "Новости компании — Модеста",
    title: "Добро пожаловать на страницу новостей компании Модеста, лидера в разработке инновационных протезов рук. Здесь вы найдете актуальные новости, обновления и достижения нашей компании, а также информацию о последних тенденциях в области протезирования",
    description:
      `Последние новости: Узнайте о новых продуктах, технологиях и исследованиях, которые мы внедряем для улучшения качества жизни людей с ампутациями.
События и мероприятия: Следите за нашими участиями в выставках, конференциях и других мероприятиях, где мы представляем наши достижения и делимся опытом.
Истории успеха: Читайте вдохновляющие истории наших клиентов, которые смогли вернуть себе активную жизнь благодаря нашим протезам.
Образовательные материалы: Получите доступ к статьям, видео и вебинарам, которые помогут вам лучше понять технологии протезирования и их влияние на жизнь пользователей.
Инновации и исследования: Ознакомьтесь с нашими последними научными разработками и проектами, направленными на улучшение функциональности и удобства протезов.`,
    keywords: "время стартап протезирование протезы временной путь история компании развитие сколково телемедфорум резиденты",
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
