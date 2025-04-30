import React, { useEffect, useState } from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import Layout from "../components/Layout/Layout.js";
import { QuizForm } from "../components/QuizForm/QuizForm.jsx";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";

export default function QuizPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    seoContent: `Опрос пользователей протезов Модеста 2025

Цели исследования:
✓ Оценка качества протезов
✓ Анализ сервисного обслуживания
✓ Изучение потребностей пользователей
✓ Сбор предложений по улучшению

Темы опроса:
• Удобство использования
• Функциональность протезов
• Качество обслуживания
• Реабилитационные программы

Ваше участие поможет:
• Улучшить конструкцию протезов
• Оптимизировать сервис
• Разработать новые функции
• Повысить качество обслуживания

Преимущества для участников:
• Влияние на развитие продукта
• Индивидуальные консультации
• Приоритетная поддержка
• Доступ к новым технологиям

#опросМодеста2025 #обратнаяСвязь #качествоПротезов #развитиеТехнологий #мнениеПользователей`,
    title: "Опросник для повышения качества обслуживания — Модеста",
    description: "Помогите нам стать лучше! Пройдите короткий опрос, чтобы улучшить качество наших протезов и обслуживания.",
    keywords: "опросник модеста, анкета протезирование, отзывы о протезах, улучшение сервиса, обратная связь",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset" side="opacity">
        <QuizForm />
      </VisibilityManager>
    </Layout>
  );
}
