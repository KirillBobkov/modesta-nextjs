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
    seoContent: `Интерактивный опросник для улучшения сервиса Модеста

Задачи исследования:
✓ Анализ пользовательского опыта
✓ Оптимизация качества обслуживания
✓ Разработка персональных решений

Ваше мнение помогает нам:
• Совершенствовать технологии
• Улучшать сервисное обслуживание
• Создавать индивидуальные решения
• Развивать новые направления`,
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
