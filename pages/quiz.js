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
    seoContent: `Опросник для улучшения сервиса Модеста

Цели анкетирования:
✓ Сбор обратной связи
✓ Улучшение качества обслуживания
✓ Персонализация решений

Важность вашего мнения:
• Совершенствование продукции
• Развитие сервиса
• Индивидуальный подход`,
    title: "Опросник для улучшения качества обслуживания — Модеста",
    description: "Помогите нам стать лучше! Пройдите короткий опрос для улучшения качества наших протезов и сервиса обслуживания.",
    keywords: "опросник модеста, анкета протезирование, отзывы протезы, улучшение сервиса, обратная связь протезы",
  };

  return (
    <Layout metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset" side="opacity">
        <QuizForm />
      </VisibilityManager>
    </Layout>
  );
}
