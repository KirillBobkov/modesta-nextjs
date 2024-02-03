import React from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import RoadmapBlock from "../components/RoadmapBlock/RoadmapBlock.jsx";
import Layout from "../components/Layout/Layout.js";
import { TeamBlock } from "../components/TeamBlock/TeamBlock.jsx";
import { HistoryBlock } from "../components/HistoryBlock/HistoryBlock.jsx";
import { SocialNetworkBlock } from "../components/SocialNetworkBlock/SocialNetworkBlock.jsx";
import { VideosBlock } from "../components/VideosBlock/VideosBlock.jsx";
import { missionContent } from "../content.ts";

export default function AboutUsPage() {
  return (
    <Layout>
      <VisibilityManager className="page-offset" side="opacity">
        <HistoryBlock
          title={missionContent.title}
          description={missionContent.description}
        />
        <SocialNetworkBlock />
        <VideosBlock />
        <RoadmapBlock />
        <TeamBlock />
      </VisibilityManager>
    </Layout>
  );
}
