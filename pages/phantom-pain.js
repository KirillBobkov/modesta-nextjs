import Layout from "../components/Layout/Layout.js";
import React from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";
import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { ArticleBlock } from "../components/ArticleBlock/ArticleBlock.js";
import { phantomPain } from '../content/articles/phantomPain.js'
export default () => {
  useScrollToLocation();
  
  const metaConfig = {
    pageTitle: "Фантомные боли и как с ними справиться",
    title: `Модеста — ${phantomPain.title}`,
    description: "При ампутации может возникнуть иной вид боли, не связанный с травмированием тканей – фантомная боль, которая иногда плохо поддается медикаментозному лечению.",
    keywords: "предплечье реабилитация протез руки фантомные боли ампутация",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <VisibilityManager className="page-offset">
        <ArticleBlock articleContent={phantomPain}/>
      </VisibilityManager>
    </Layout>
  );
}