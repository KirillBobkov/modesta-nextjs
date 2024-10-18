import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";
import Analytics from "../components/Analytics/Analytics.jsx";

export default function AnalyticsPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    pageTitle: "Аналитика Модеста",
    title: "Подключение протеза к приложению — Модеста",
    description: "Приложение для анализа параметров протеза",
    keywords: "время стартап протезирование протезы временной путь история компании развитие сколково телемедфорум резиденты",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <Analytics />
    </Layout>
  );
}