import Layout from "../components/Layout/Layout";
import React from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";

import { VideosBlock } from "../components/VideosBlock/VideosBlock.jsx";
import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { ArticlesBlock } from "../components/ArticlesBlock/ArticlesBlock.jsx";
import { Questions } from "../components/Questions/Questions.jsx";

export default function InfoPage() {
  useScrollToLocation();
  return (
    <Layout>
      <VisibilityManager styles={{ paddingTop: '150px' }}>
        <ArticlesBlock />
        <VideosBlock />
        <Questions />
      </VisibilityManager>
    </Layout>
  );
}
