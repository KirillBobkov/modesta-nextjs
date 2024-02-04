import Head from "next/head";
import Script from "next/script";
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

const rotateMp4 = "/images/rotate_5.mp4";

export default function MainPage() {
  useScrollToLocation();

  const metaConfig = {
    pageTitle: "Инновационный протез, меняющий правила игры",
    title: "Модеста — Протез руки",
    description: "Официальный сайт компании Модеста. Разрабатываем протезы для предплечья и кисти. Помогаем получить протез бесплатно",
    keywords: "протез руки разработка сво травма рука предплечье дизайн сколково курган модеста реабилитация протезирование",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <VisibilityManager side="opacity">
        <PreviewBlock video={rotateMp4} poster={rotate_poster.src} subTitle={headerContent.subTitle} title={headerContent.title} />
        <AdvantagesBlock />
        <TechBlock />
        <ReplacementBlock />
        <ProblemsBlock />
        <Questions />
      </VisibilityManager>
    </Layout>
  );
}
