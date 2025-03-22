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
    seoContent: `Опрос для улучшения качества протезов и сервиса Модеста

Цели исследования 2024:
✓ Анализ пользовательского опыта с новыми моделями
✓ Оценка эффективности сервисной поддержки
✓ Изучение потребностей в новых функциях
✓ Сбор предложений по улучшению

Ключевые направления опроса:
• Удобство использования протезов
• Эффективность технической поддержки
• Качество реабилитационных программ
• Доступность сервисного обслуживания

Ваше мнение поможет нам:
• Усовершенствовать конструкцию протезов
• Оптимизировать процесс адаптации
• Улучшить качество обслуживания
• Разработать новые функции

Преимущества участия:
• Влияние на развитие продукта
• Персональные рекомендации
• Приоритетная техподдержка
• Участие в тестировании новинок

#обратнаяСвязь #улучшениеПротезов #качествоПротезирования #мнениеПользователей #развитиеТехнологий #модестаОтзывы`,
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
