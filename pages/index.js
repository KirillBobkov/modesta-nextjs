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
import { useMediaQuery } from "../hooks/useMediaQuery";

const rotateMp4 = "/images/rotate_5.mp4";

export default function MainPage() {
  useScrollToLocation();
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);

  return (
    <Layout>
      <VisibilityManager side="opacity">
        <PreviewBlock
          video={rotateMp4}
          poster={rotate_poster.src}
          subTitle={
            isMobile
              ? `Разрабатываем протезы верхних 
            конечностей, включая модели 
            тягового и биоэлектрического типа, 
            позволяющие восстановить
            утерянную функциональность`
              : `Разрабатываем протезы верхних конечностей, 
            включая модели тягового и биоэлектрического типа, 
            позволяющие восстановить утерянную функциональность`
          }
          title={"Протез для жизни"}
        />
        <AdvantagesBlock />
        <TechBlock />
        <ReplacementBlock />
        <ProblemsBlock />
        <Questions />
      </VisibilityManager>
    </Layout>
  );
}
