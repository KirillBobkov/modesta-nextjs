import React, { useEffect, useState } from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import Layout from "../components/Layout/Layout.js";
import { HistoryBlock } from "../components/HistoryBlock/HistoryBlock.jsx";
import { SocialNetworkBlock } from "../components/SocialNetworkBlock/SocialNetworkBlock.jsx";
import { VideosGrid } from "../components/VideosGrid/VideosGrid.jsx";
import { missionContent } from "../content/mission.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";

export default function AboutUsPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    pageTitle: "Читайте и смотрите нас на любых площадках",
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
        <VideosGrid />
      </VisibilityManager>
    </Layout>
  );
}
