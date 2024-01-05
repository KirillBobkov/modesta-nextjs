import Layout from "../components/Layout/Layout";
import React from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";
import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";
import { Steps } from "../components/Steps/Steps.jsx";

export default function BuyPage() {
  useScrollToLocation();
  return (
    <Layout>
      <VisibilityManager styles={{ paddingTop: '150px' }}>
        <Steps />
      </VisibilityManager>
    </Layout>
  );
}
