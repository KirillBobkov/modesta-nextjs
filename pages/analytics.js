import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout.js";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";
import {AnalyticsBlock}  from "../components/Analytics/Analytics.jsx";

export default function AnalyticsPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    seoContent: `Аналитика и управление протезом Модеста 2025

Основные функции:
✓ Мониторинг работы протеза
✓ Анализ использования
✓ Персонализация настроек
✓ Удаленное управление

Технические возможности:
• Отслеживание параметров
• Статистика использования
• Оптимизация работы
• Обновление прошивки

Преимущества системы:
• Удобный интерфейс
• Мобильное приложение
• Облачная синхронизация
• Техническая поддержка

#аналитикаПротезов2025 #управлениеПротезом #мобильноеПриложение #умныеТехнологии #модестаАналитика`,
    title: "Аналитика и управление протезом | Модеста",
    description: "Инновационное приложение для анализа параметров и управления протезом. Улучшайте эффективность использования вашего протеза с помощью современных технологий.",
    keywords: "аналитика протезов, управление протезом, приложение модеста, параметры протеза, настройка протеза, мониторинг протеза",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <AnalyticsBlock />
    </Layout>
  );
}