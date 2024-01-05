import Head from "next/head";
import Script from "next/script";
import Layout from "../components/Layout/Layout";
import rotate_poster from "../public/images/rotate__poster.jpg";
import { VisibilityManager } from "../components/VisibilityManager";
import { PreviewBlock } from "../components/PreviewBlock/PreviewBlock";
import { HistoryBlock } from "../components/HistoryBlock/HistoryBlock";
import { AdvantagesBlock } from "../components/AdvantagesBlock/AdvantagesBlock";
import { ReplacementBlock } from "../components/ReplacementBlock/ReplacementBlock";
import { ProblemsBlock } from "../components/ProblemsBlock/ProblemsBlock";
import { TechBlock } from "../components/TechBlock/TechBlock";
import { useScrollToLocation } from "../hooks/useScrollToLocation";

const rotateMp4 = "/images/rotate.mp4";

export default function MainPage() {
  useScrollToLocation();
  return (
    <Layout>
      <VisibilityManager side="opacity">
        <PreviewBlock video={rotateMp4} poster={rotate_poster} />
        <HistoryBlock
          title={"Миссия компании"}
          subTitle={
            " — создавать качественные функциональные протезы и обеспечивать первоклассное сервисное обслуживание."
          }
          description={`Мы специализируемся на разработке протезов для верхних конечностей, включая модели тягового и биоэлектрического типа. Наши изделия помогают вернуть утраченные возможности, улучшить функциональность и комфорт, позволяют активно участвовать в повседневных занятиях, работе и социальной жизни. Разрабатывая наши прототипы, мы решаем сложные задачи, связанные с функциональностью, хватательной силой, практичностью и долговечностью протезов, а так же обеспечиваем высокий уровень в реабилитации. Мы предоставляем оптимальные решения для адаптации и качества жизни`}
        />
        <AdvantagesBlock />
        <ReplacementBlock />
        <ProblemsBlock />
        <TechBlock />
      </VisibilityManager>
    </Layout>
  );
}
