import React from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import Layout from "../components/Layout/Layout.js";
import { QuizForm } from "../components/QuizForm/QuizForm.jsx";

export default function QuizPage() {
  const metaConfig = {
    pageTitle: "Пройдите опросник Модеста",
    title: "Модеста — заполнение анкеты",
    description: "Собрали несколько вопросов для того чтобы улучшать сервис",
    keywords: "время стартап протезирование протезы временной путь история компании развитие сколково телемедфорум резиденты",
  };

  return (
    <Layout metaConfig={metaConfig}>
      <VisibilityManager className="page-offset" side="opacity">
        <QuizForm />
      </VisibilityManager>
    </Layout>
  );
}
