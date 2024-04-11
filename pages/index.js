import Layout from "../components/Layout/Layout";
import rotate_poster from "../public/images/rotate__poster.jpg";
import { VisibilityManager } from "../components/VisibilityManager";
import { PreviewBlock } from "../components/PreviewBlock/PreviewBlock";
import { AdvantagesBlock } from "../components/AdvantagesBlock/AdvantagesBlock";
import { ReplacementBlock } from "../components/ReplacementBlock/ReplacementBlock";
import { ProblemsBlock } from "../components/ProblemsBlock/ProblemsBlock";
import { Questions } from "../components/Questions/Questions";
import { TechBlock } from "../components/TechBlock/TechBlock";
import { useScrollToLocation } from "../hooks/useScrollToLocation";
import { headerContent } from "../content/header.js";
import { useRouter } from "next/router.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useEffect } from "react";

const mainPageVideo = {
    link: "/images/rotate_5.mp4",
    thumbnailUrl: rotate_poster.src,
    name: "Превью протеза руки человека",
    uploadDate: new Date("February 12, 2024").toISOString(),
    poster: rotate_poster.src,
}

export default function MainPage() {
  const router = useRouter();

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  useScrollToLocation();

  const metaConfig = {
    pageTitle: "Инновационный протез, меняющий правила игры",
    title: "Протез руки — Модеста",
    description: "Официальный сайт компании Модеста. Разрабатываем протезы для предплечья и кисти. Помогаем получить протез бесплатно",
    keywords: "протез руки разработка сво травма рука предплечье дизайн сколково курган модеста реабилитация протезирование",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <VisibilityManager side="opacity">
        <PreviewBlock video={mainPageVideo} subTitle={headerContent.subTitle} title={headerContent.title} />
        <AdvantagesBlock />
        <TechBlock />
        <ReplacementBlock />
        <ProblemsBlock />
        <Questions />
      </VisibilityManager>
    </Layout>
  );
}
