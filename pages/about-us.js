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
    seoContent: `Модеста - инновационная компания в сфере протезирования

Наши цели:
✓ Создание современных и доступных протезов
✓ Улучшение условий жизни пациентов
✓ Применение современных технологий в протезировании`,
    title: "Компания Модеста | Ведущий разработчик инновационных протезов",
    description: "Модеста - ведущий российский производитель современных протезов верхних конечностей. Познакомьтесь с нашими целями, технологиями и успехами в области протезирования.",
    keywords: "компания модеста, создание протезов, современные протезы, протезы россия, протезирование технологии, бионика протезы",
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
