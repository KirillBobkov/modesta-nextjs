import Layout from "../components/Layout/Layout";
import React from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";

import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { BooksBlock } from "../components/BooksBlock/BooksBlock.jsx";
import { LawsBlock } from "../components/LawsBlock/LawsBlock.jsx";
import { ArticlesGrid } from "../components/ArticlesGrid/ArticlesGrid";

export default function InfoPage() {
  useScrollToLocation();
  return (
    <Layout>
      <VisibilityManager className="page-offset">
        <BooksBlock />
        <ArticlesGrid />
        <LawsBlock />
      </VisibilityManager>
    </Layout>
  );
}
