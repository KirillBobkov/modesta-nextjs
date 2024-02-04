import Layout from "../components/Layout/Layout";
import React from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";

import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { ArticleBlock } from "../components/ArticleBlock/ArticleBlock.js";
import { typesOfProthesis } from "../content/articles/typesOfProthesis.js";

export default () => {
  useScrollToLocation();

  const metaConfig = {
    pageTitle: typesOfProthesis.title,
    title: `Модеста — ${typesOfProthesis.title}`,
    description: "Какие виды протезов бывают: биоэлектрические, косметические, детские протезы",
    keywords: "биоэлектрические, косметические, детские протезы протез руки разработка дизайн сколково курган модеста",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <VisibilityManager className="page-offset">
        <ArticleBlock articleContent={typesOfProthesis}/>
      </VisibilityManager>
    </Layout>
  );
}
