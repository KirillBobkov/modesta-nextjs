import React from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import RoadmapBlock from "../components/RoadmapBlock/RoadmapBlock.jsx";
import Layout from "../components/Layout/Layout.js";
import { TeamBlock } from "../components/TeamBlock/TeamBlock.jsx";
import { HistoryBlock } from "../components/HistoryBlock/HistoryBlock.jsx";
import { ArticlesBlock } from "../components/ArticlesBlock/ArticlesBlock.jsx";
import { VideosBlock } from "../components/VideosBlock/VideosBlock.jsx";

export default function AboutUsPage() {
  return (
    <Layout>
      <VisibilityManager side="opacity">
      <HistoryBlock
          title={"Создаём качественные функциональные протезы"}
          descriptions={[
            "Мы специализируемся на разработке протезов для верхних конечностей, включая модели тягового и биоэлектрического типа.",
            "Наши изделия помогают вернуть утраченные возможности, улучшить функциональность и комфорт, позволяют активно участвовать в повседневных занятиях, работе и социальной жизни.",
            "Разрабатывая наши прототипы, мы решаем сложные задачи, связанные с функциональностью, хватательной силой, практичностью и долговечностью протезов, а так же обеспечиваем высокий уровень в реабилитации. Мы предоставляем оптимальные решения для адаптации и качества жизни",
          ]}
        />
        <ArticlesBlock />
        <VideosBlock />
        <RoadmapBlock />
        <TeamBlock />
      </VisibilityManager>
    </Layout>
  );
}
