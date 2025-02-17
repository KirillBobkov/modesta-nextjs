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
    seoContent: `Компания Модеста: инновации в протезировании

Наша миссия:
✓ Разработка доступных высокотехнологичных протезов
✓ Повышение качества жизни пациентов
✓ Внедрение передовых технологий в протезирование`,
    title: "О компании Модеста | Лидер в разработке современных протезов",
    description: "Модеста - российский производитель инновационных протезов верхних конечностей. Узнайте о нашей миссии, технологиях и достижениях в области протезирования.",
    keywords: "модеста компания, разработка протезов, инновационные протезы, российские протезы, технологии протезирования, бионические протезы",
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
