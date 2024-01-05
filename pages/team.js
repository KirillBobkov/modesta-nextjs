import Layout from "../components/Layout/Layout";
import React from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";
import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import teamPreview from '../public/images/team_preview_bg.jpg';
import { PreviewBlock } from "../components/PreviewBlock/PreviewBlock.jsx";
import { TeamBlock } from "../components/TeamBlock/TeamBlock.jsx";

export default function TeamPage() {
  useScrollToLocation();
  return (
    <Layout>
       <VisibilityManager side="opacity">
        <PreviewBlock img={teamPreview.src} title={'Только профессионалы'} subTitle={'Мы не стоим на месте, и постоянно повышаем свою квалификацию'}/>
        <TeamBlock />
    </VisibilityManager>
    </Layout>
  );
}