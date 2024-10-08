import React, { useEffect, useState } from "react";
import { VisibilityManager } from "../components/VisibilityManager.jsx";
import { NewMap } from "../components/NewMap/NewMap.jsx";
import Layout from "../components/Layout/Layout.js";
import { TeamBlock } from "../components/TeamBlock/TeamBlock.jsx";
import { useYandexRobot } from "../hooks/useYandexMetricsPageLoaded.jsx";
import { useRouter } from "next/router.js";

export default function HistoryPage() {
  const router = useRouter();
  const [popupOpened, setOpened] = useState(false);

  useEffect(() => {
    useYandexRobot(router.pathname);
  }, []);

  const metaConfig = {
    pageTitle: "Откуда появилась компания Модеста? Когда попали в Сколково? Как давно производим протезы? Все ответы здесь",
    title: "Вдохновляющий и непредсказуемый путь в мире протезирования — Модеста",
    description:
      "С самых первых дней нашей работы мы стремимся помочь людям вернуться к полноценной жизни. Мы создаём протезы, основываясь на новейших технологиях и исследованиях. И сегодня мы с уверенностью можем сказать, что наши усилия были не напрасны. Мы не останавливаемся на достигнутом и продолжаем развиваться, чтобы предлагать вам еще более качественные и удобные протезы. Наша история продолжается, и мы приглашаем вас стать ее частью!",
    keywords: "время стартап протезирование протезы временной путь история компании развитие сколково телемедфорум резиденты",
  };
  return (
    <Layout  metaConfig={metaConfig} popupOpened={popupOpened} setOpened={setOpened}>
      <VisibilityManager className="page-offset" side="opacity">
        <NewMap />
        <TeamBlock />
      </VisibilityManager>
    </Layout>
  );
}
