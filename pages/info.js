import Layout from "../components/Layout/Layout";
import React from "react";

import { VisibilityManager } from "../components/VisibilityManager.jsx";

import { useScrollToLocation } from "../hooks/useScrollToLocation.jsx";

export default function InfoPage() {
  useScrollToLocation();
  return (
    <Layout>
      <VisibilityManager styles={{ paddingTop: '150px' }}>
      </VisibilityManager>
    </Layout>
  );
}
