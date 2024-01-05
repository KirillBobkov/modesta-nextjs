import React from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import RoadmapBlock from "../components/RoadmapBlock/RoadmapBlock.jsx";
import Layout from "../components/Layout/Layout.js";

export default function RoadmapPage() {
  return (
    <Layout>
      <VisibilityManager side="opacity">
        <RoadmapBlock />
      </VisibilityManager>
    </Layout>
  );
}
