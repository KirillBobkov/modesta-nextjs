import Layout from "../components/Layout/Layout";
import React from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";

import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { BooksBlock } from "../components/BooksBlock/BooksBlock.jsx";
import { LawsBlock } from "../components/LawsBlock/LawsBlock.jsx";

export default function InfoPage() {
  useScrollToLocation();
  return (
    <Layout>
      <VisibilityManager classes="page-offset">
        <BooksBlock />
        <LawsBlock />
      </VisibilityManager>
    </Layout>
  );
}
