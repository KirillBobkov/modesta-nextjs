import React, { useEffect } from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import RoadmapBlock from "../components/RoadmapBlock/RoadmapBlock.jsx";
import Layout from "../components/Layout/Layout.js";
import { TeamBlock } from "../components/TeamBlock/TeamBlock.jsx";
import { HistoryBlock } from "../components/HistoryBlock/HistoryBlock.jsx";
import { SocialNetworkBlock } from "../components/SocialNetworkBlock/SocialNetworkBlock.jsx";
import { VideosBlock } from "../components/VideosBlock/VideosBlock.jsx";
import { missionContent } from "../content/mission.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";

export default function AboutUsPage() {
  const router = useRouter();

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    pageTitle: "Откуда появилась компания Модеста? Когда попали в Сколково? Как давно производим протезы? Все ответы здесь",
    title: "Вдохновляющий и непредсказуемый путь в мире протезирования — Модеста",
    description:
      "С самых первых дней нашей работы мы стремимся помочь людям вернуться к полноценной жизни. Мы создаём протезы, основываясь на новейших технологиях и исследованиях. И сегодня мы с уверенностью можем сказать, что наши усилия были не напрасны. Мы не останавливаемся на достигнутом и продолжаем развиваться, чтобы предлагать вам еще более качественные и удобные протезы. Наша история продолжается, и мы приглашаем вас стать ее частью!",
    keywords: "время стартап протезирование протезы временной путь история компании развитие сколково телемедфорум резиденты",
  };
  return (
    <Layout metaConfig={metaConfig}>
      <VisibilityManager className="page-offset" side="opacity">
        <HistoryBlock image={missionContent.image} title={missionContent.title} description={missionContent.description} />
        <SocialNetworkBlock />
        <VideosBlock />
        <RoadmapBlock />
        <TeamBlock />
      </VisibilityManager>
    </Layout>
  );
}
